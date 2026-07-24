import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { Box, ChakraProvider, defaultSystem, Heading, Text } from "@chakra-ui/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Manrope:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0c100e" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <Box as="main" className="error-page">
      <Text className="error-code">{isNotFound ? "404" : "500"}</Text>
      <Heading as="h1">
        {isNotFound ? "This page is off the map." : "Something did not go to plan."}
      </Heading>
      <Text>
        {isNotFound
          ? "The address may have changed, or the page may no longer exist."
          : "The issue has been contained. Please try again in a moment."}
      </Text>
      <a href="/">Return to Digital Kraft</a>
    </Box>
  );
}
