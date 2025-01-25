import { copyFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Required for __dirname in ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

// Your existing logic (modified for ESM)
const engineDir = join(__dirname, '../node_modules/@prisma/engines');
const prismaDir = join(__dirname, '../node_modules/prisma');

const engineFiles = readdirSync(engineDir).filter(file => 
  file.startsWith('libquery_engine-')
);

if (engineFiles.length === 0) {
  console.error('❌ Prisma engine file not found');
  process.exit(1);
}

const engineSrc = join(engineDir, engineFiles[0]);
const engineDest = join(prismaDir, engineFiles[0]);

if (!existsSync(engineDest)) {
  copyFileSync(engineSrc, engineDest);
  console.log(`✅ Copied Prisma engine to: ${engineDest}`);
} else {
  console.log(`ℹ️ Prisma engine already exists`);
}