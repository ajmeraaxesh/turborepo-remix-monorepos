import { MetaFunction, LinksFunction, LoaderFunction, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import localTailwindStylesheetUrl from "./styles/local-tailwind.css"
import { getEnv } from "./env.server";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix-Web",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: localTailwindStylesheetUrl },
   //{ rel: "stylesheet", href: sharedPackageTailwindStylesheetUrl }
  ]
}

type LoaderData = {
  //user: Awaited<ReturnType<typeof getUser>>;
  ENV: ReturnType<typeof getEnv>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    //user: await getUser(request),
    ENV: getEnv(),
  });
};


export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {/** Exposing Environment variable which is to be available on client side */}
        <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(data.ENV)}`}}/>
        <LiveReload />
      </body>
    </html>
  );
}
