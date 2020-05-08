import * as Sentry from "@sentry/node";
import get from "lodash.get";

import isBrowser from "@sentrei/web/utils/isBrowser";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled: process.env.NODE_ENV !== "test",
  environment: process.env.APP_STAGE,
  release: process.env.APP_VERSION_RELEASE,
});

Sentry.configureScope(scope => {
  scope.setTag("nodejs", process.version);
  scope.setTag("runtimeEngine", isBrowser ? "browser" : "server");
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
