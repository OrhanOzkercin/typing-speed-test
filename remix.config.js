/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "production" ? "./server.js" : undefined,
  ignoredRouteFiles: ["**/.*"],
};
