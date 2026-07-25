#!/usr/bin/env bash

set -Eeuo pipefail

readonly deploy_sha="${1:?Usage: deploy-production.sh <git-sha>}"
readonly app_dir="/var/www/digitalkraft"
previous_sha=""
deployment_started=false

if [[ ! "$deploy_sha" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Invalid deployment commit: $deploy_sha" >&2
  exit 1
fi

rollback() {
  local exit_code=$?
  trap - ERR

  if [[ "$deployment_started" == true && -n "$previous_sha" ]]; then
    echo "Deployment failed; restoring $previous_sha"
    git reset --hard "$previous_sha"
    npm ci
    rm -rf build
    npm run build
    sudo systemctl restart digitalkraft.service
  fi

  exit "$exit_code"
}

trap rollback ERR

cd "$app_dir"
previous_sha="$(git rev-parse HEAD)"

echo "Fetching main from GitHub"
git fetch --prune origin main

if ! git cat-file -e "${deploy_sha}^{commit}"; then
  echo "Commit $deploy_sha was not fetched from origin" >&2
  exit 1
fi

if ! git merge-base --is-ancestor "$deploy_sha" origin/main; then
  echo "Refusing to deploy a commit that is not on origin/main" >&2
  exit 1
fi

deployment_started=true

echo "Deploying $deploy_sha"
git checkout main
git reset --hard "$deploy_sha"
npm ci
rm -rf build
npm run build

sudo systemctl restart digitalkraft.service
systemctl is-active --quiet digitalkraft.service

curl \
  --fail \
  --silent \
  --show-error \
  --retry 8 \
  --retry-all-errors \
  --retry-delay 2 \
  --max-time 10 \
  http://127.0.0.1:3000/ > /dev/null

deployed_sha="$(git rev-parse HEAD)"
if [[ "$deployed_sha" != "$deploy_sha" ]]; then
  echo "Expected $deploy_sha but deployed $deployed_sha" >&2
  exit 1
fi

deployment_started=false
trap - ERR
echo "Deployment complete: $deployed_sha"