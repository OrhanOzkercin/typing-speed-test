/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverDependenciesToBundle: [
    "lucide-react",
    "@radix-ui/react-slot",
    "@radix-ui/react-toast",
    "class-variance-authority"
  ],

};