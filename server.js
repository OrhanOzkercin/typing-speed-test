const { createRequestHandler } = require("@vercel/remix");
module.exports = createRequestHandler({
  build: require("./build/index.js"),
});
