// electron/services/referenceParser.js

/**
 * Maps common names, abbreviations, and spoken variations of all 66 Bible books
 * to their standard canonical names.
 */
const BOOK_ALIASES = {
  // Old Testament
  'genesis': 'Genesis', 'gen': 'Genesis', 'ge': 'Genesis', 'gn': 'Genesis',
  'exodus': 'Exodus', 'exod': 'Exodus', 'exo': 'Exodus', 'ex': 'Exodus',
  'leviticus': 'Leviticus', 'lev': 'Leviticus', 'le': 'Leviticus', 'lv': 'Leviticus',
  'numbers': 'Numbers', 'num': 'Numbers', 'nu': 'Numbers', 'nm': 'Numbers',
  'deuteronomy': 'Deuteronomy', 'deut': 'Deuteronomy', 'deu': 'Deuteronomy', 'dt': 'Deuteronomy',
  'joshua': 'Joshua', 'josh': 'Joshua', 'jos': 'Joshua',
  'judges': 'Judges', 'judg': 'Judges', 'jdg': 'Judges', 'jg': 'Judges', 'jdgs': 'Judges',
  'ruth': 'Ruth', 'rut': 'Ruth', 'rth': 'Ruth',

  // 1 Samuel
  '1 samuel': '1 Samuel', '1samuel': '1 Samuel', '1 sam': '1 Samuel', '1sam': '1 Samuel', '1 sa': '1 Samuel',
  '1st samuel': '1 Samuel', 'first samuel': '1 Samuel', 'i samuel': '1 Samuel', 'i sam': '1 Samuel',

  // 2 Samuel
  '2 samuel': '2 Samuel', '2samuel': '2 Samuel', '2 sam': '2 Samuel', '2sam': '2 Samuel', '2 sa': '2 Samuel',
  '2nd samuel': '2 Samuel', 'second samuel': '2 Samuel', 'ii samuel': '2 Samuel', 'ii sam': '2 Samuel',

  // 1 Kings
  '1 kings': '1 Kings', '1kings': '1 Kings', '1 king': '1 Kings', '1 kgs': '1 Kings', '1kgs': '1 Kings', '1 ki': '1 Kings', '1ki': '1 Kings',
  '1st kings': '1 Kings', 'first kings': '1 Kings', 'i kings': '1 Kings', 'i kgs': '1 Kings',

  // 2 Kings
  '2 kings': '2 Kings', '2kings': '2 Kings', '2 king': '2 Kings', '2 kgs': '2 Kings', '2kgs': '2 Kings', '2 ki': '2 Kings', '2ki': '2 Kings',
  '2nd kings': '2 Kings', 'second kings': '2 Kings', 'ii kings': '2 Kings', 'ii kgs': '2 Kings',

  // 1 Chronicles
  '1 chronicles': '1 Chronicles', '1chronicles': '1 Chronicles', '1 chron': '1 Chronicles', '1chron': '1 Chronicles', '1 chr': '1 Chronicles', '1chr': '1 Chronicles',
  '1st chronicles': '1 Chronicles', 'first chronicles': '1 Chronicles', 'i chronicles': '1 Chronicles', 'i chr': '1 Chronicles',

  // 2 Chronicles
  '2 chronicles': '2 Chronicles', '2chronicles': '2 Chronicles', '2 chron': '2 Chronicles', '2chron': '2 Chronicles', '2 chr': '2 Chronicles', '2chr': '2 Chronicles',
  '2nd chronicles': '2 Chronicles', 'second chronicles': '2 Chronicles', 'ii chronicles': '2 Chronicles', 'ii chr': '2 Chronicles',

  'ezra': 'Ezra', 'ezr': 'Ezra',
  'nehemiah': 'Nehemiah', 'neh': 'Nehemiah', 'ne': 'Nehemiah',
  'esther': 'Esther', 'esth': 'Esther', 'est': 'Esther',
  'job': 'Job', 'jb': 'Job',
  'psalms': 'Psalm', 'psalm': 'Psalm', 'ps': 'Psalm', 'psa': 'Psalm', 'pss': 'Psalm',
  'proverbs': 'Proverbs', 'proverb': 'Proverbs', 'prov': 'Proverbs', 'pro': 'Proverbs', 'prv': 'Proverbs',
  'ecclesiastes': 'Ecclesiastes', 'eccles': 'Ecclesiastes', 'eccl': 'Ecclesiastes', 'ecc': 'Ecclesiastes', 'qoh': 'Ecclesiastes',
  'song of solomon': 'Song of Solomon', 'song of songs': 'Song of Solomon', 'song of song': 'Song of Solomon', 'canticles': 'Song of Solomon', 'cant': 'Song of Solomon',
  'isaiah': 'Isaiah', 'isa': 'Isaiah',
  'jeremiah': 'Jeremiah', 'jer': 'Jeremiah',
  'lamentations': 'Lamentations', 'lamentation': 'Lamentations', 'lam': 'Lamentations',
  'ezekiel': 'Ezekiel', 'ezek': 'Ezekiel', 'eze': 'Ezekiel',
  'daniel': 'Daniel', 'dan': 'Daniel', 'dn': 'Daniel',
  'hosea': 'Hosea', 'hos': 'Hosea',
  'joel': 'Joel', 'joe': 'Joel',
  'amos': 'Amos', 'amo': 'Amos',
  'obadiah': 'Obadiah', 'obad': 'Obadiah', 'oba': 'Obadiah', 'ob': 'Obadiah',
  'jonah': 'Jonah', 'jon': 'Jonah', 'jnh': 'Jonah',
  'micah': 'Micah', 'mic': 'Micah',
  'nahum': 'Nahum', 'nah': 'Nahum',
  'habakkuk': 'Habakkuk', 'hab': 'Habakkuk',
  'zephaniah': 'Zephaniah', 'zeph': 'Zephaniah', 'zep': 'Zephaniah',
  'haggai': 'Haggai', 'hag': 'Haggai', 'hgg': 'Haggai',
  'zechariah': 'Zechariah', 'zech': 'Zechariah', 'zec': 'Zechariah',
  'malachi': 'Malachi', 'mal': 'Malachi',

  // New Testament
  'matthew': 'Matthew', 'matt': 'Matthew', 'mat': 'Matthew', 'mt': 'Matthew',
  'mark': 'Mark', 'mrk': 'Mark', 'mar': 'Mark', 'mk': 'Mark',
  'luke': 'Luke', 'luk': 'Luke', 'lk': 'Luke',
  'john': 'John', 'jhn': 'John', 'joh': 'John', 'jn': 'John',
  'acts': 'Acts', 'act': 'Acts', 'ac': 'Acts',
  'romans': 'Romans', 'roman': 'Romans', 'rom': 'Romans', 'ro': 'Romans', 'rm': 'Romans',

  // 1 Corinthians
  '1 corinthians': '1 Corinthians', '1corinthians': '1 Corinthians', '1 cor': '1 Corinthians', '1cor': '1 Corinthians', '1 co': '1 Corinthians',
  '1st corinthians': '1 Corinthians', 'first corinthians': '1 Corinthians', 'i corinthians': '1 Corinthians', 'i cor': '1 Corinthians',

  // 2 Corinthians
  '2 corinthians': '2 Corinthians', '2corinthians': '2 Corinthians', '2 cor': '2 Corinthians', '2cor': '2 Corinthians', '2 co': '2 Corinthians',
  '2nd corinthians': '2 Corinthians', 'second corinthians': '2 Corinthians', 'ii corinthians': '2 Corinthians', 'ii cor': '2 Corinthians',

  'galatians': 'Galatians', 'gal': 'Galatians', 'ga': 'Galatians',
  'ephesians': 'Ephesians', 'eph': 'Ephesians', 'ep': 'Ephesians',
  'philippians': 'Philippians', 'phil': 'Philippians', 'php': 'Philippians', 'pp': 'Philippians',
  'colossians': 'Colossians', 'col': 'Colossians',

  // 1 Thessalonians
  '1 thessalonians': '1 Thessalonians', '1thessalonians': '1 Thessalonians', '1 thess': '1 Thessalonians', '1thess': '1 Thessalonians', '1 th': '1 Thessalonians',
  '1st thessalonians': '1 Thessalonians', 'first thessalonians': '1 Thessalonians', 'i thessalonians': '1 Thessalonians', 'i thess': '1 Thessalonians',

  // 2 Thessalonians
  '2 thessalonians': '2 Thessalonians', '2thessalonians': '2 Thessalonians', '2 thess': '2 Thessalonians', '2thess': '2 Thessalonians', '2 th': '2 Thessalonians',
  '2nd thessalonians': '2 Thessalonians', 'second thessalonians': '2 Thessalonians', 'ii thessalonians': '2 Thessalonians', 'ii thess': '2 Thessalonians',

  // 1 Timothy
  '1 timothy': '1 Timothy', '1timothy': '1 Timothy', '1 tim': '1 Timothy', '1tim': '1 Timothy', '1 ti': '1 Timothy',
  '1st timothy': '1 Timothy', 'first timothy': '1 Timothy', 'i timothy': '1 Timothy', 'i tim': '1 Timothy',

  // 2 Timothy
  '2 timothy': '2 Timothy', '2timothy': '2 Timothy', '2 tim': '2 Timothy', '2tim': '2 Timothy', '2 ti': '2 Timothy',
  '2nd timothy': '2 Timothy', 'second timothy': '2 Timothy', 'ii timothy': '2 Timothy', 'ii tim': '2 Timothy',

  'titus': 'Titus', 'tit': 'Titus', 'ti': 'Titus',
  'philemon': 'Philemon', 'philem': 'Philemon', 'phm': 'Philemon',
  'hebrews': 'Hebrews', 'heb': 'Hebrews',
  'james': 'James', 'jas': 'James', 'jm': 'James',

  // 1 Peter
  '1 peter': '1 Peter', '1peter': '1 Peter', '1 pet': '1 Peter', '1pet': '1 Peter', '1 pe': '1 Peter', '1 pt': '1 Peter',
  '1st peter': '1 Peter', 'first peter': '1 Peter', 'i peter': '1 Peter', 'i pet': '1 Peter',

  // 2 Peter
  '2 peter': '2 Peter', '2peter': '2 Peter', '2 pet': '2 Peter', '2pet': '2 Peter', '2 pe': '2 Peter', '2 pt': '2 Peter',
  '2nd peter': '2 Peter', 'second peter': '2 Peter', 'ii peter': '2 Peter', 'ii pet': '2 Peter',

  // 1 John
  '1 john': '1 John', '1john': '1 John', '1 jhn': '1 John', '1 jn': '1 John', '1jn': '1 John',
  '1st john': '1 John', 'first john': '1 John', 'i john': '1 John', 'i jn': '1 John',

  // 2 John
  '2 john': '2 John', '2john': '2 John', '2 jhn': '2 John', '2 jn': '2 John', '2jn': '2 John',
  '2nd john': '2 John', 'second john': '2 John', 'ii john': '2 John', 'ii jn': '2 John',

  // 3 John
  '3 john': '3 John', '3john': '3 John', '3 jhn': '3 John', '3 jn': '3 John', '3jn': '3 John',
  '3rd john': '3 John', 'third john': '3 John', 'iii john': '3 John', 'iii jn': '3 John',

  'jude': 'Jude', 'jud': 'Jude', 'jd': 'Jude',
  'revelation': 'Revelation', 'revelations': 'Revelation', 'rev': 'Revelation', 'rv': 'Revelation', 'apocalypse': 'Revelation'
};

const SINGLE_CHAPTER_BOOKS = new Set(['Obadiah', 'Philemon', '2 John', '3 John', 'Jude']);

const NUMBER_WORDS = {
  zero: 0, one: 1, first: 1, two: 2, second: 2, three: 3, third: 3,
  four: 4, fourth: 4, five: 5, fifth: 5, six: 6, sixth: 6, seven: 7, seventh: 7,
  eight: 8, eighth: 8, nine: 9, ninth: 9, ten: 10, tenth: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
  twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90,
  hundred: 100
};

/**
 * Converts a string number or number words into an integer.
 * Handles both "16" and "sixteen" or "twenty-three".
 */
function parseNumber(val) {
  if (typeof val === 'number') return val;
  if (!val) return null;
  val = String(val).trim().toLowerCase();
  if (/^\d+$/.test(val)) return parseInt(val, 10);

  const tokens = val.replace(/[-]/g, ' ').split(/\s+/);
  let total = 0;
  let current = 0;
  for (const tok of tokens) {
    if (NUMBER_WORDS[tok] !== undefined) {
      const num = NUMBER_WORDS[tok];
      if (num === 100) {
        current = (current || 1) * 100;
      } else {
        current += num;
      }
    } else {
      return null;
    }
  }
  total += current;
  return total > 0 ? total : null;
}

// Build master regex with all aliases sorted by length descending so that
// multi-word aliases (e.g. "1 john", "song of solomon") match before shorter ones ("john", "song").
const sortedBookKeys = Object.keys(BOOK_ALIASES).sort((a, b) => b.length - a.length);
const escapedBookKeys = sortedBookKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const BOOK_REGEX = new RegExp(`(?:(?:the\\s+)?(?:book\\s+of\\s+))?\\b(${escapedBookKeys.join('|')})\\b`, 'i');

function buildRef(book, chapter, startVerse, endVerse) {
  const isRange = endVerse && endVerse !== startVerse;
  return {
    book,
    chapter,
    startVerse,
    endVerse,
    label: `${book} ${chapter}:${startVerse}${isRange ? `-${endVerse}` : ''}`
  };
}

/**
 * Parses natural language, spoken transcriptions, and written Bible references.
 *
 * Supported formats include:
 *  - "John 3:16", "John 3:16-18", "John 3:16–18", "John 3.16"
 *  - "John chapter 3 verse 16", "John chapter 3 verses 16 to 18"
 *  - "John 3 verse 16", "John 3 16"
 *  - "1 Corinthians 13:4-8", "First Corinthians 13:4"
 *  - "Jude 24", "Jude verse 24" (single-chapter books)
 *  - Spoken number words: "John chapter three verse sixteen"
 *
 * @param {string} text - Raw input text from speech transcription or user input
 * @returns {Object|null} { book, chapter, startVerse, endVerse, label } or null
 */
function parseBibleReference(text) {
  if (!text || typeof text !== 'string') return null;

  const bookMatch = text.match(BOOK_REGEX);
  if (!bookMatch) return null;

  const matchedAlias = bookMatch[1].toLowerCase();
  const canonicalBook = BOOK_ALIASES[matchedAlias];
  const afterBook = text.slice(bookMatch.index + bookMatch[0].length).replace(/^[\s,;:.]+/, '');

  const rangeConnector = '(?:[-–—]|\\b(?:to|through|dash)\\b)';
  const versePrefix = '(?:verses?|v|vs|ver)?\\.?';

  // 1. Single-chapter books without chapter number: e.g. "Jude 24", "Jude verse 24", "Jude 4-8"
  if (SINGLE_CHAPTER_BOOKS.has(canonicalBook)) {
    // Check if explicit chapter 1:24 is provided first
    const fullPattern = new RegExp(
      `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z -]+?)\\s*[:.]\\s*${versePrefix}\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?(?:\\b|[^\\d\\w]|$)`,
      'i'
    );
    const mFull = afterBook.match(fullPattern);
    if (mFull) {
      const chapter = parseNumber(mFull[1]);
      const startVerse = parseNumber(mFull[2]);
      const endVerse = mFull[3] ? parseNumber(mFull[3]) : startVerse;
      if (chapter && startVerse && endVerse) {
        return buildRef(canonicalBook, chapter, startVerse, endVerse);
      }
    }

    // Single chapter books shorthand: treat first number as verse in chapter 1
    const singlePat = new RegExp(
      `^\\s*${versePrefix}\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?(?:\\b|[^\\d\\w]|$)`,
      'i'
    );
    const mSingle = afterBook.match(singlePat);
    if (mSingle) {
      const startVerse = parseNumber(mSingle[1]);
      const endVerse = mSingle[2] ? parseNumber(mSingle[2]) : startVerse;
      if (startVerse && endVerse) {
        return buildRef(canonicalBook, 1, startVerse, endVerse);
      }
    }
  }

  // 2. Standard format with colon or dot: "John 3:16", "John 3.16", "John 3:16-18", "John 3:16 to 18"
  const colonPattern = new RegExp(
    `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z -]+?)\\s*[:.]\\s*${versePrefix}\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?(?:\\b|[^\\d\\w]|$)`,
    'i'
  );
  const mColon = afterBook.match(colonPattern);
  if (mColon) {
    const chapter = parseNumber(mColon[1]);
    const startVerse = parseNumber(mColon[2]);
    const endVerse = mColon[3] ? parseNumber(mColon[3]) : startVerse;
    if (chapter && startVerse && endVerse) {
      return buildRef(canonicalBook, chapter, startVerse, endVerse);
    }
  }

  // 3. Spoken format: "John chapter 3 verse 16", "John 3 verse 16", "John chapter 3 verses 16 to 18"
  const spokenPattern = new RegExp(
    `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z -]+?)[\\s,]+(?:verses?|v|vs)\\.?\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?(?:\\b|[^\\d\\w]|$)`,
    'i'
  );
  const mSpoken = afterBook.match(spokenPattern);
  if (mSpoken) {
    const chapter = parseNumber(mSpoken[1]);
    const startVerse = parseNumber(mSpoken[2]);
    const endVerse = mSpoken[3] ? parseNumber(mSpoken[3]) : startVerse;
    if (chapter && startVerse && endVerse) {
      return buildRef(canonicalBook, chapter, startVerse, endVerse);
    }
  }

  // 4. Space separated numbers without punctuation: "John 3 16", "John 3 16 to 18"
  const spacePattern = new RegExp(
    `^\\s*(\\d{1,3})\\s+(\\d{1,3})(?:\\s*${rangeConnector}\\s*(\\d{1,3}))?(?:\\b|[^\\d\\w]|$)`,
    'i'
  );
  const mSpace = afterBook.match(spacePattern);
  if (mSpace) {
    const chapter = parseInt(mSpace[1], 10);
    const startVerse = parseInt(mSpace[2], 10);
    const endVerse = mSpace[3] ? parseInt(mSpace[3], 10) : startVerse;
    // Sanity boundary check for chapters and verses in the Bible
    if (chapter >= 1 && chapter <= 150 && startVerse >= 1 && startVerse <= 176) {
      return buildRef(canonicalBook, chapter, startVerse, endVerse);
    }
  }

  return null;
}

module.exports = { parseBibleReference, BOOK_ALIASES };
