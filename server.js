import { createRequestHandler } from "@vercel/remix";
import * as build from "@vercel/remix";

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
