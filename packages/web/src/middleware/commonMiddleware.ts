/* eslint-disable @typescript-eslint/no-explicit-any */

import cookieSession from "@sentrei/web/middleware/cookieSession";
import cookieSessionRefresh from "@sentrei/web/middleware/cookieSessionRefresh";

export default function cookieMiddleware(handler: any): void {
  cookieSession(cookieSessionRefresh(handler));
}
