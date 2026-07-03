import sharp from 'sharp';
import { readdir, stat, rename, mkdir } from 'fs/promises';
import { join } from 'path';

const IMAGES_DIR = join(process.cwd(), 'public', 'images');
const BACKUP_DIR = join(IMAGES_DIR, '_originals');

const CONFIG = {
  'hero-milling-spindle.jpg': { width: 1920, quality: 85 },
  'project-1.jpg': { width: 1200, quality: 87 },
  'project-2.jpg': { width: 1200, quality: 87 },
  'project-3.jpg': { width: 1200, quality: 87 },
  'project-4.jpg': { width: 1200, quality: 87 },
  'project-5.jpg': { width: 1200, quality: 87 },
  'project-6.jpg': { width: 1200, quality: 87 },
  'project-7.jpg': { width: 1200, quality: 87 },
  'project-8.jpg': { width: 1200, quality: 87 },
};
const DEFAULT = { width: 1200, quality: 82 };

function fmt(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

const files = (await readdir(BACKUP_DIR)).filter(f => /\.(jpg|jpeg)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = join(IMAGES_DIR, file);
  const backup = join(BACKUP_DIR, file);
  const { size: before } = await stat(backup);
  totalBefore += before;

  const cfg = CONFIG[file] ?? DEFAULT;

  await sharp(backup)
    .rotate()
    .resize({ width: cfg.width, withoutEnlargement: true })
    .jpeg({ quality: cfg.quality, mozjpeg: true })
    .toFile(src);

  const { size: after } = await stat(src);
  totalAfter += after;

  const pct = (((before - after) / before) * 100).toFixed(0);
  console.log(`${file.padEnd(32)} ${fmt(before).padStart(8)} → ${fmt(after).padStart(8)}   -${pct}%`);
}

console.log('');
console.log(`${'TOTAL'.padEnd(32)} ${fmt(totalBefore).padStart(8)} → ${fmt(totalAfter).padStart(8)}   -${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%`);
console.log(`\nOriginali sačuvani u: public/images/_originals/`);
