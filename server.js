import { createRequestHandler } from "@vercel/remix";
import * as build from "./build/index.js"; // Changed from require()

export default createRequestHandler({ build });