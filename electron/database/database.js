// electron/database/database.js
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

/**
 * Strips editorial/margin notes like {grass: Heb. tender grass}
 * and un-brackets supplied translator words like {and} -> and.
 */
function cleanVerseText(rawText) {
  if (!rawText) return '';
  return rawText
    .replace(/\s*\{[^}]*:[^}]*\}\s*/g, ' ')
    .replace(/\{([^}]+)\}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Seeds the full 66-book King James Version translation into SQLite.
 */
function seedFullBible(db) {
  const assetPath = path.join(__dirname, 'assets', 'kjv.json');
  if (!fs.existsSync(assetPath)) {
    console.warn('[Database] KJV asset file not found at:', assetPath);
    return;
  }

  console.log('[Database] Importing full KJV Bible translation (66 books, ~31,100 verses)...');
  const raw = fs.readFileSync(assetPath, 'utf8');
  const clean = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
  const books = JSON.parse(clean);

  const insert = db.prepare('INSERT OR REPLACE INTO verses (book, chapter, verse, text) VALUES (?, ?, ?, ?)');

  const t0 = Date.now();
  const insertAll = db.transaction(() => {
    for (const b of books) {
      const bookName = b.name;
      for (let cIdx = 0; cIdx < b.chapters.length; cIdx++) {
        const chapterNum = cIdx + 1;
        const chapterVerses = b.chapters[cIdx];
        for (let vIdx = 0; vIdx < chapterVerses.length; vIdx++) {
          const verseNum = vIdx + 1;
          const text = cleanVerseText(chapterVerses[vIdx]);
          insert.run(bookName, chapterNum, verseNum, text);
        }
      }
    }
  });

  insertAll();
  const elapsed = Date.now() - t0;
  const count = db.prepare('SELECT COUNT(*) AS count FROM verses').get().count;
  console.log(`[Database] Successfully seeded ${count} verses in ${elapsed}ms.`);
}

function openBibleDatabase(userDataPath) {
  const dataDir = path.join(userDataPath, 'churchscreen-ai');
  fs.mkdirSync(dataDir, { recursive: true });

  const db = new Database(path.join(dataDir, 'bible.db'));
  db.exec(`CREATE TABLE IF NOT EXISTS verses (
    book TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    verse INTEGER NOT NULL,
    text TEXT NOT NULL,
    PRIMARY KEY (book, chapter, verse)
  )`);

  // Create an index for fast book + chapter queries
  db.exec(`CREATE INDEX IF NOT EXISTS idx_verses_lookup ON verses(book, chapter, verse)`);

  const count = db.prepare('SELECT COUNT(*) AS count FROM verses').get().count;
  // If database is empty or only has the old sample verses (< 1000), seed the full KJV Bible
  if (count < 1000) {
    seedFullBible(db);
  }

  return db;
}

module.exports = { openBibleDatabase, cleanVerseText };
