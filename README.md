# Digital Kraft

Website for [digitalkraft.co.uk](https://digitalkraft.co.uk), an independent senior product and engineering studio.

## Local development

The project requires Node.js 22 or later. With `nvm` installed:

```sh
nvm use
npm ci
npm run dev
```

## Validation

```sh
npm run check
```

## Production identity

- Canonical website: `https://digitalkraft.co.uk`
- Contact: `hello@digitalkraft.co.uk`
- `digitalkraft.studio` is the brand-protection domain and should permanently redirect to the canonical `.co.uk` domain.

Serve only one canonical copy of the site. Configure `digitalkraft.studio` at the registrar, CDN, or hosting provider to issue an HTTP `301` redirect to `https://digitalkraft.co.uk`, preserving paths and query strings.

## Hosting requirement

This is a server-rendered Remix application. Production hosting must support a persistent Node.js 22 process and serve `build/client` as static assets while running `build/server/index.js` through `npm start`.

An FTP-only shared hosting plan is not compatible: uploading `public` does not deploy the application.

## Production deployment

Pushes to `main` are validated and automatically deployed to the production VPS by GitHub Actions. The deployment checks out the exact pushed commit, installs locked dependencies, rebuilds the Remix application, restarts `digitalkraft.service`, and verifies both the local service and public HTTPS endpoint. A failed deployment restores the previous commit.

The workflow requires one repository Actions secret:

- `VPS_SSH_KEY`: the private key authorized for the `irumole` production user.

Configure it in **GitHub → Settings → Secrets and variables → Actions → New repository secret**. Never commit the private key to the repository.

The production user must retain passwordless `sudo` access for restarting `digitalkraft.service`. Deployments are serialized, so a newer push waits for an in-progress production deployment rather than interrupting it.
