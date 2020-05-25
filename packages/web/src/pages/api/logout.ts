/* eslint-disable @typescript-eslint/no-explicit-any */

import {NextApiResponse} from "next";

import commonMiddleware from "@sentrei/web/middleware/commonMiddleware";

const handler = (req: any, res: NextApiResponse): void => {
  // Destroy the session.
  // https://github.com/expressjs/cookie-session#destroying-a-session

  req.session = null;
  res.status(200).json({status: true});
};

export default commonMiddleware(handler);
