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
    endVerse: endVerse || startVerse,
    label: `${book} ${chapter}:${startVerse}${isRange ? `-${endVerse}` : ''}`
  };
}

// Common natural conversational phrases used by preachers between book/chapter and verse
// e.g. "and I'm reading from verse 23", "we're looking at verse 33", "let's read verse 6 first"
const FILLER_PHRASES = `[\\s,;]+(?:and\\s+)?(?:(?:we|i)(?:'re|'m|\\s+are|\\s+am)?\\s+)?(?:reading|looking|turning|read|look|start|starting|come)?(?:\\s+(?:from|at|to|in))?|(?:[\\s,;]+let(?:'s|\\s+us)?(?:\\s+read)?)|(?:[\\s,;]+and)|(?:[\\s,;]+from)|(?:[\\s,;]+we're\\s+reading(?:\\s+from)?)|(?:[\\s,;]+we're\\s+looking(?:\\s+at)?)|(?:[\\s,;]+i'm\\s+reading(?:\\s+from)?)`;

// Active session context to remember the last detected book and chapter
let activeSessionContext = {
  book: null,
  chapter: null,
  lastUpdated: 0
};

function setActiveContext(book, chapter) {
  activeSessionContext = {
    book,
    chapter,
    lastUpdated: Date.now()
  };
}

function getActiveContext() {
  // Context expires after 10 minutes of silence/inactivity
  if (Date.now() - activeSessionContext.lastUpdated > 10 * 60 * 1000) {
    activeSessionContext = { book: null, chapter: null, lastUpdated: 0 };
  }
  return activeSessionContext;
}

function resetActiveContext() {
  activeSessionContext = { book: null, chapter: null, lastUpdated: 0 };
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
 *  - Spoken conversational preaching phrases:
 *      "Acts chapter 16 and I'm reading from verse 23"
 *      "Acts chapter 16 we're looking at verse 23"
 *      "Colossians chapter 3 I'm reading from verse 16"
 *      "Exodus chapter 15 let's read verse 6 first"
 *      "Now look at Joshua chapter 2 we're reading from verse 9"
 *  - Subsequent contextual verses in the same chapter:
 *      "In verse 24...", "Look at verse 26...", "Come to verse 11...", "Verse 17..."
 *
 * @param {string} text - Raw input text from speech transcription or user input
 * @param {Object} [contextOverride] - Optional { book, chapter } context
 * @returns {Object|null} { book, chapter, startVerse, endVerse, label } or null
 */
function parseBibleReference(text, contextOverride = null) {
  if (!text || typeof text !== 'string') return null;

  const context = contextOverride || getActiveContext();
  const rangeConnector = '(?:[-–—]|\\b(?:to|through|dash|thru|until)\\b)';
  const versePrefix = '(?:verses?|v|vs|ver)?\\.?';

  // 1. First, check if a full book is mentioned in the text
  const bookMatch = text.match(BOOK_REGEX);
  if (bookMatch) {
    const matchedAlias = bookMatch[1].toLowerCase();
    const canonicalBook = BOOK_ALIASES[matchedAlias];
    const afterBook = text.slice(bookMatch.index + bookMatch[0].length).replace(/^[\s,;:.]+/, '');

    // Single-chapter books (Jude, Philemon, 2 John, 3 John, Obadiah)
    if (SINGLE_CHAPTER_BOOKS.has(canonicalBook)) {
      // e.g. "Jude chapter 1 reading from verse 14" or "Jude 1:14"
      const scFull = new RegExp(
        `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z -]+?)\\s*[:.]\\s*${versePrefix}\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?`,
        'i'
      );
      const mScFull = afterBook.match(scFull);
      if (mScFull) {
        const ch = parseNumber(mScFull[1]);
        const sv = parseNumber(mScFull[2]);
        const ev = mScFull[3] ? parseNumber(mScFull[3]) : sv;
        if (ch && sv) {
          setActiveContext(canonicalBook, ch);
          return buildRef(canonicalBook, ch, sv, ev);
        }
      }

      // Spoken filler in single-chapter book: "Jude chapter 1 reading from verse 14"
      const scSpoken = new RegExp(
        `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z]+(?:\\s+[a-z]+)?)(?:${FILLER_PHRASES})+[\\s,;]+(?:verses?|v|vs|ver)\\.?\\s*(\\d+|[a-z]+(?:\\s+[a-z]+)?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?`,
        'i'
      );
      const mScSpoken = afterBook.match(scSpoken);
      if (mScSpoken) {
        const ch = parseNumber(mScSpoken[1]);
        const sv = parseNumber(mScSpoken[2]);
        const ev = mScSpoken[3] ? parseNumber(mScSpoken[3]) : sv;
        if (ch && sv) {
          setActiveContext(canonicalBook, ch);
          return buildRef(canonicalBook, ch, sv, ev);
        }
      }

      // Single chapter books shorthand: "Jude 14", "Jude verse 14", "Jude 14 to 16"
      const scVerseOnly = new RegExp(
        `^\\s*(?:verses?|v|vs|ver)?\\.?\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?`,
        'i'
      );
      const mScVerse = afterBook.match(scVerseOnly);
      if (mScVerse) {
        const sv = parseNumber(mScVerse[1]);
        const ev = mScVerse[2] ? parseNumber(mScVerse[2]) : sv;
        if (sv) {
          setActiveContext(canonicalBook, 1);
          return buildRef(canonicalBook, 1, sv, ev);
        }
      }
    }

    // Standard notation: "John 3:16", "John 3.16", "John 3:16-18", "John 3:16 to 18"
    const colonPattern = new RegExp(
      `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z -]+?)\\s*[:.]\\s*${versePrefix}\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?`,
      'i'
    );
    const mColon = afterBook.match(colonPattern);
    if (mColon) {
      const ch = parseNumber(mColon[1]);
      const sv = parseNumber(mColon[2]);
      const ev = mColon[3] ? parseNumber(mColon[3]) : sv;
      if (ch && sv) {
        setActiveContext(canonicalBook, ch);
        return buildRef(canonicalBook, ch, sv, ev);
      }
    }

    // Natural spoken patterns WITH preaching conversational filler:
    // e.g.:
    // "Acts chapter 16 and I'm reading from verse 23"
    // "Acts chapter 16 we're looking at verse 23"
    // "Colossians chapter 3 I'm reading from verse 16"
    // "Exodus chapter 15 let's read verse 6 first"
    // "Joshua chapter 2 we're reading from verse 9"
    // "Matthew chapter 28 we're reading from verse 18"
    const spokenFillerPattern = new RegExp(
      `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z]+(?:\\s+[a-z]+)?)(?:${FILLER_PHRASES})+[\\s,;]+(?:verses?|v|vs|ver)\\.?\\s*(\\d+|[a-z]+(?:\\s+[a-z]+)?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?`,
      'i'
    );
    const mSpokenFiller = afterBook.match(spokenFillerPattern);
    if (mSpokenFiller) {
      const ch = parseNumber(mSpokenFiller[1]);
      const sv = parseNumber(mSpokenFiller[2]);
      const ev = mSpokenFiller[3] ? parseNumber(mSpokenFiller[3]) : sv;
      if (ch && sv) {
        setActiveContext(canonicalBook, ch);
        return buildRef(canonicalBook, ch, sv, ev);
      }
    }

    // Standard spoken pattern without filler: "John chapter 3 verse 16", "John 3 verse 16"
    const spokenPattern = new RegExp(
      `^\\s*(?:chapter|ch|c)?\\.?\\s*(\\d+|[a-z -]+?)[\\s,]+(?:verses?|v|vs|ver)\\.?\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?`,
      'i'
    );
    const mSpoken = afterBook.match(spokenPattern);
    if (mSpoken) {
      const ch = parseNumber(mSpoken[1]);
      const sv = parseNumber(mSpoken[2]);
      const ev = mSpoken[3] ? parseNumber(mSpoken[3]) : sv;
      if (ch && sv) {
        setActiveContext(canonicalBook, ch);
        return buildRef(canonicalBook, ch, sv, ev);
      }
    }

    // Space-separated numbers without punctuation: "John 3 16", "John 3 16 to 18"
    const spacePattern = new RegExp(
      `^\\s*(\\d{1,3})\\s+(\\d{1,3})(?:\\s*${rangeConnector}\\s*(\\d{1,3}))?`,
      'i'
    );
    const mSpace = afterBook.match(spacePattern);
    if (mSpace) {
      const ch = parseInt(mSpace[1], 10);
      const sv = parseInt(mSpace[2], 10);
      const ev = mSpace[3] ? parseInt(mSpace[3], 10) : sv;
      if (ch >= 1 && ch <= 150 && sv >= 1 && sv <= 176) {
        setActiveContext(canonicalBook, ch);
        return buildRef(canonicalBook, ch, sv, ev);
      }
    }

    // Chapter-only introduction: e.g. "Exodus chapter 15", "in Colossians 3"
    // Sets active context and defaults to verse 1
    const chapterOnlyPattern = /^\s*(?:chapter|ch|c)\.?\s*(\d+|[a-z -]+?)(?:[^\d\w]|$)/i;
    const mChOnly = afterBook.match(chapterOnlyPattern);
    if (mChOnly) {
      const ch = parseNumber(mChOnly[1]);
      if (ch && ch >= 1 && ch <= 150) {
        setActiveContext(canonicalBook, ch);
        return buildRef(canonicalBook, ch, 1, 1);
      }
    }
  }

  // 2. Contextual standalone verse references (when preacher is already reading in an announced chapter)
  // e.g. "In verse 24...", "Look at verse 26...", "Come to verse 11...", "Verse 17..."
  if (context && context.book && context.chapter) {
    // Check for chapter change without repeating book name: "in chapter 16 verse 2"
    const chVersePattern = new RegExp(
      `(?:in\\s+)?(?:chapter|ch|c)\\.?\\s*(\\d+|[a-z -]+?)(?:${FILLER_PHRASES}|[\\s,;]+)+(?:verses?|v|vs|ver)\\.?\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?`,
      'i'
    );
    const mChV = text.match(chVersePattern);
    if (mChV) {
      const ch = parseNumber(mChV[1]);
      const sv = parseNumber(mChV[2]);
      const ev = mChV[3] ? parseNumber(mChV[3]) : sv;
      if (ch && sv) {
        setActiveContext(context.book, ch);
        return buildRef(context.book, ch, sv, ev);
      }
    }

    // Verse-only reference within the active book and chapter:
    // e.g. "look at verse 24", "in verse 26", "verse 17", "come to verse 11", "in the next verse, verse 26"
    const verseOnlyPattern = new RegExp(
      `\\b(?:look\\s+at|in|at|come\\s+to|let's\\s+read|read)?\\s*verses?\\s*(\\d+|[a-z -]+?)(?:\\s*${rangeConnector}\\s*${versePrefix}\\s*(\\d+|[a-z -]+?))?(?:\\b|[^\\d\\w]|$)`,
      'i'
    );
    const mVOnly = text.match(verseOnlyPattern);
    if (mVOnly) {
      const sv = parseNumber(mVOnly[1]);
      const ev = mVOnly[2] ? parseNumber(mVOnly[2]) : sv;
      if (sv && sv >= 1 && sv <= 176) {
        return buildRef(context.book, context.chapter, sv, ev);
      }
    }
  }

  return null;
}

module.exports = {
  parseBibleReference,
  BOOK_ALIASES,
  setActiveContext,
  getActiveContext,
  resetActiveContext
};
