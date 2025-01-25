/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  server: "./server.js",
  serverBuildPath: "build/index.js",
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverDependenciesToBundle: [
    "@prisma/client",
    ".prisma/client"
  ],
  future: {
    unstable_nodeModules: ["@prisma/client"],
    v3_fetcherPersist: true,
  },
};
