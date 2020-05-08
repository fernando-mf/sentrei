import * as Sentry from "@sentry/node";
import getConfig from "next/config";
import get from "lodash.get";

import isBrowser from "@sentrei/web/utils/isBrowser";

const {
  publicRuntimeConfig: {SENTRY_DSN},
} = getConfig();

Sentry.init({
  dsn: SENTRY_DSN,
  enabled: process.env.NODE_ENV !== "test",
  environment: process.env.APP_STAGE,
  release: process.env.APP_VERSION_RELEASE,
});

if (!process.env.SENTRY_DSN && process.env.NODE_ENV !== "test") {
  console.error("Sentry DSN not defined");
}

Sentry.configureScope(scope => {
  scope.setTag("nodejs", process.version);
  scope.setTag("runtimeEngine", isBrowser ? "browser" : "server");
});

export const configureReq = (req: any): void => {
  Sentry.configureScope(scope => {
    scope.setTag("host", get(req, "headers.host"));
    scope.setTag("url", get(req, "url"));
    scope.setTag("method", get(req, "method"));
    scope.setContext("query", get(req, "query"));
    scope.setContext("cookies", get(req, "cookies"));
    scope.setContext("body", get(req, "body"));
    scope.setContext("headers", get(req, "headers"));
  });
};

export default Sentry;
