/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieSession from "cookie-session";
import {NextApiRequest, NextApiResponse} from "next";
import getConfig from "next/config";

import isDev from "@sentrei/common/utils/isDev";

const {publicRuntimeConfig} = getConfig();
export const addSession = (req: any, res: any) => {
  // An array is useful for rotating secrets without invalidating old sessions.
  // The first will be used to sign cookies, and the rest to validate them.
  // https://github.com/expressjs/cookie-session#keys
  let sessionSecrets = <any>[];

  if (isDev()) {
    sessionSecrets = [
      process.env.SESSION_SECRET_CURRENT,
      process.env.SESSION_SECRET_PREVIOUS,
    ];
  } else if (
    !(
      publicRuntimeConfig.SESSION_SECRET_CURRENT &&
      publicRuntimeConfig.SESSION_SECRET_PREVIOUS
    )
  ) {
    throw new Error(
      "Session secrets must be set as env vars `SESSION_SECRET_CURRENT` and `SESSION_SECRET_PREVIOUS`.",
    );
  } else {
    sessionSecrets = [
      publicRuntimeConfig.SESSION_SECRET_CURRENT,
      publicRuntimeConfig.SESSION_SECRET_PREVIOUS,
    ];
  }

  // Example:
  // https://github.com/billymoon/micro-cookie-session
  const includeSession = cookieSession({
    keys: sessionSecrets,
    // TODO: set other options, such as "secure", "sameSite", etc.
    // https://github.com/expressjs/cookie-session#cookie-options
    maxAge: 604800000, // week
    httpOnly: true,
    overwrite: true,
  });
  includeSession(req, res, () => {});
};

export default (handler: any) => (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    addSession(req, res);
  } catch (e) {
    return res.status(500).json({error: "Could not get user session."});
  }
  return handler(req, res);
};
