// electron/database/bibleQueries.js

function findVerse(db, reference) {
  if (!reference || !reference.book) return null;

  let verses = db.prepare(
    'SELECT book, chapter, verse, text FROM verses WHERE lower(book) = lower(?) AND chapter = ? AND verse BETWEEN ? AND ? ORDER BY verse'
  ).all(reference.book, reference.chapter, reference.startVerse, reference.endVerse || reference.startVerse);

  // If not found and book is Psalm / Psalms, try the other variant
  if (!verses.length) {
    const lower = reference.book.toLowerCase();
    let altBook = null;
    if (lower === 'psalm') altBook = 'Psalms';
    else if (lower === 'psalms') altBook = 'Psalm';

    if (altBook) {
      verses = db.prepare(
        'SELECT book, chapter, verse, text FROM verses WHERE lower(book) = lower(?) AND chapter = ? AND verse BETWEEN ? AND ? ORDER BY verse'
      ).all(altBook, reference.chapter, reference.startVerse, reference.endVerse || reference.startVerse);
    }
  }

  return verses.length ? { reference: reference.label, verses } : null;
}

module.exports = { findVerse };
