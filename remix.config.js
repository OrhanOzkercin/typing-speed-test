/** @type {import('@remix-run/dev').AppConfig} */
export default { // Changed from module.exports
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "production" ? "./server.js" : undefined,
  ignoredRouteFiles: ["**/.*"],
  future: {
    unstable_nodeModules: ["@prisma/client"]
  }
};