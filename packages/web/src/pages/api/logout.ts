/* eslint-disable @typescript-eslint/no-explicit-any */
import {NextApiRequest, NextApiResponse} from "next";

import commonMiddleware from "@sentrei/web/middleware/commonMiddleware";

// req type: CookieSession?
const handler = (req: any, res: NextApiResponse) => {
  // Destroy the session.
  // https://github.com/expressjs/cookie-session#destroying-a-session
  req.session = null;
  res.status(200).json({status: true});
};

export default commonMiddleware(handler);
