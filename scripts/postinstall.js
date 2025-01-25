const { copyFileSync, existsSync, readdirSync } = require("fs");
const { join } = require("path");

// Paths
const engineDir = join(__dirname, "../node_modules/@prisma/engines");
const prismaDir = join(__dirname, "../node_modules/prisma");

// Find engine file (e.g., libquery_engine-linux-arm64-openssl-3.0.x.so.node)
const engineFiles = readdirSync(engineDir).filter((file) => file.startsWith("libquery_engine-"));

if (engineFiles.length === 0) {
  console.error("❌ Prisma engine file not found in @prisma/engines");
  process.exit(1);
}

const engineSrc = join(engineDir, engineFiles[0]);
const engineDest = join(prismaDir, engineFiles[0]);

// Copy only if missing
if (!existsSync(engineDest)) {
  copyFileSync(engineSrc, engineDest);
  console.log(`✅ Copied Prisma engine to: ${engineDest}`);
} else {
  console.log(`ℹ️ Prisma engine already exists: ${engineDest}`);
}
