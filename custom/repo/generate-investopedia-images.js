import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDdEr2h7LGPHO41WGJYjMSvrFmPKIx4lNI';
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${apiKey}`;
const outputDir = path.join(__dirname, 'public', 'images', 'investopedia-ai');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const articleFiles = [
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'investopediaArticles.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'downtownDubai.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'businessBay.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'dubaiMarina.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'palmJumeirah.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'emiratesHills.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'dubaiHillsEstate.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'jbr.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'arabianRanches.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'jvc.ts'),
  path.join(__dirname, 'src', 'pages', 'newhomepage', 'data', 'neighborhoods', 'otherNeighborhoods.ts'),
];

const referenceRoots = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'src', 'assets'),
  path.join(__dirname, 'images'),
  path.join(__dirname, 'flip photo'),
  path.join(__dirname, 'public'),
  path.join(__dirname, 'Website'),
];

function walkFiles(rootDir) {
  if (!fs.existsSync(rootDir)) {
    return [];
  }

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'investopedia-ai' || entry.name === 'node_modules' || entry.name === '.git') {
        continue;
      }
      files.push(...walkFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function mimeTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  return 'image/jpeg';
}

function isReferenceImage(filePath) {
  const lower = filePath.toLowerCase();
  const ext = path.extname(lower);
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return false;
  }
  if (lower.includes('investopedia-ai')) {
    return false;
  }
  if (lower.includes('dashboard') || lower.includes('logo') || lower.includes('icon')) {
    return false;
  }
  return true;
}

function getReferenceImages() {
  const unique = new Map();

  for (const root of referenceRoots) {
    for (const filePath of walkFiles(root)) {
      if (!isReferenceImage(filePath)) {
        continue;
      }
      const key = path.basename(filePath).toLowerCase();
      if (!unique.has(key)) {
        unique.set(key, filePath);
      }
    }
  }

  return Array.from(unique.values());
}

function extractArticlesFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const articles = [];
  const objectRegex = /{\s*id:\s*(\d+),[\s\S]*?category:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)',[\s\S]*?excerpt:\s*'([^']*)',[\s\S]*?content:\s*`([\s\S]*?)`,[\s\S]*?slug:\s*'([^']+)',[\s\S]*?image:\s*'([^']+)'[\s\S]*?}/g;

  let match;
  while ((match = objectRegex.exec(content)) !== null) {
    articles.push({
      id: Number(match[1]),
      category: match[2],
      title: match[3],
      excerpt: match[4],
      content: match[5],
      slug: match[6],
      image: match[7],
      sourceFile: filePath,
    });
  }

  return articles;
}

function extractAllArticles() {
  return articleFiles.flatMap((filePath) => extractArticlesFromFile(filePath));
}

function summarizeContent(content) {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`/g, '')
    .replace(/[#*_>-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 900);
}

function selectReferenceImages(referenceImages, article) {
  if (referenceImages.length === 0) {
    return [];
  }

  const offset = article.id % referenceImages.length;
  const selected = [];

  for (let i = 0; i < Math.min(3, referenceImages.length); i += 1) {
    selected.push(referenceImages[(offset + i) % referenceImages.length]);
  }

  return selected;
}

const VISUAL_CONCEPTS = [
  // Architectural exteriors
  {
    subject: 'a stunning modern Dubai villa exterior at golden hour',
    composition: 'wide angle shot showing the full facade with infinity pool reflecting the sky',
    mood: 'warm sunset light casting long shadows, palm trees silhouetted'
  },
  {
    subject: 'aerial view of Palm Jumeirah villas and waterfront',
    composition: 'drone perspective showing the iconic palm fronds with luxury properties',
    mood: 'crystal clear turquoise water, pristine white architecture'
  },
  {
    subject: 'Dubai Marina skyline from a penthouse terrace',
    composition: 'foreground terrace with elegant outdoor furniture, towers in background',
    mood: 'blue hour twilight, city lights beginning to glow'
  },
  // Luxury interiors
  {
    subject: 'minimalist luxury villa living room with floor-to-ceiling windows',
    composition: 'interior shot showing Dubai skyline through glass walls',
    mood: 'soft natural daylight, neutral tones with subtle gold accents'
  },
  {
    subject: 'modern open-plan kitchen in a renovated Dubai villa',
    composition: 'clean lines, marble island, designer fixtures',
    mood: 'bright and airy, morning light streaming in'
  },
  {
    subject: 'master bedroom with panoramic city views',
    composition: 'elegant bed facing large windows, tasteful decor',
    mood: 'serene and luxurious, soft ambient lighting'
  },
  // Construction & Development
  {
    subject: 'villa renovation in progress showing transformation',
    composition: 'split view or angle showing renovation work and quality materials',
    mood: 'professional, progress-focused, clean construction site'
  },
  {
    subject: 'architectural blueprints on a desk with Dubai property view behind',
    composition: 'close-up of plans with out-of-focus luxury view through window',
    mood: 'professional, planning phase, aspirational'
  },
  // Lifestyle & Investment
  {
    subject: 'pristine swimming pool of a Dubai villa',
    composition: 'water-level shot with villa architecture reflected in pool',
    mood: 'tranquil, inviting, resort-like atmosphere'
  },
  {
    subject: 'landscaped garden of an Emirates Hills mansion',
    composition: 'manicured lawns, mature trees, glimpse of grand entrance',
    mood: 'lush greenery contrasting with modern architecture'
  },
  {
    subject: 'Burj Khalifa and Downtown Dubai at dusk',
    composition: 'iconic skyline shot from elevated vantage point',
    mood: 'dramatic sky colors, city coming alive with lights'
  },
  {
    subject: 'luxury villa entrance with statement door and lighting',
    composition: 'symmetrical front-on view, dramatic architectural entrance',
    mood: 'welcoming yet impressive, evening ambient lighting'
  },
  // Detail shots
  {
    subject: 'high-end finishes in a Dubai property - marble and brass details',
    composition: 'close-up of premium materials and craftsmanship',
    mood: 'tactile luxury, attention to detail'
  },
  {
    subject: 'rooftop terrace with lounge area overlooking Dubai',
    composition: 'outdoor living space with city panorama',
    mood: 'exclusive lifestyle, evening entertaining atmosphere'
  },
  {
    subject: 'beachfront villa with private beach access',
    composition: 'property meeting pristine sand and sea',
    mood: 'coastal luxury, vacation-like serenity'
  },
];

function buildPrompt(article) {
  const summary = summarizeContent(article.content);
  const conceptIndex = article.id % VISUAL_CONCEPTS.length;
  const concept = VISUAL_CONCEPTS[conceptIndex];

  return [
    `Create one photorealistic premium editorial real-estate image for the InvestDubai article titled "${article.title}".`,
    `Category: ${article.category}.`,
    `Article excerpt: ${article.excerpt}`,
    ``,
    `SPECIFIC VISUAL DIRECTION:`,
    `Subject: ${concept.subject}`,
    `Composition: ${concept.composition}`,
    `Mood: ${concept.mood}`,
    ``,
    `Article content context: ${summary}`,
    ``,
    `The image must feel connected to InvestDubai's premium Dubai real estate brand.`,
    `Use the attached company archive photos as visual references for realism, tone, and quality standards.`,
    `Strict requirements: no humans, no people, no faces, no silhouettes, no text, no logos.`,
    `Avoid futuristic, sci-fi, CGI-heavy, or synthetic aesthetics.`,
    `Style: luxury real-estate photography, high-end editorial, cinematic realistic lighting, 8K quality.`,
    `Add a very subtle accent of brand color #28de91 if naturally fitting (optional).`,
  ].join('\n');
}

async function generateImage(article, referenceImages) {
  const prompt = buildPrompt(article);
  const selectedReferences = selectReferenceImages(referenceImages, article);

  const parts = [{ text: prompt }];

  for (const referencePath of selectedReferences) {
    const inlineData = fs.readFileSync(referencePath).toString('base64');
    parts.push({
      inlineData: {
        mimeType: mimeTypeFor(referencePath),
        data: inlineData,
      },
    });
  }

  console.log(`Generating image for Article ${article.id}: ${article.title}...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts }],
    }),
  });

  const data = await response.json();

  const imagePart = data?.candidates?.[0]?.content?.parts?.find((part) => part.inlineData?.data);

  if (!imagePart) {
    throw new Error(JSON.stringify(data).slice(0, 800));
  }

  const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
  const fileName = `article-${article.id}.jpg`;
  const filePath = path.join(outputDir, fileName);

  fs.writeFileSync(filePath, buffer);
  console.log(`✅ Saved image to: ${filePath}`);

  return `/images/investopedia-ai/${fileName}`;
}

function updateImageInFile(article, newImagePath) {
  let content = fs.readFileSync(article.sourceFile, 'utf8');
  const regex = new RegExp(`(id:\\s*${article.id},[\\s\\S]*?image:\\s*')[^']*(')`);

  if (!regex.test(content)) {
    return false;
  }

  content = content.replace(regex, `$1${newImagePath}$2`);
  fs.writeFileSync(article.sourceFile, content, 'utf8');
  return true;
}

async function processAll() {
  const allArticles = extractAllArticles();
  const referenceImages = getReferenceImages();

  console.log(`Found ${allArticles.length} total articles.`);
  console.log(`Found ${referenceImages.length} local reference images.`);

  for (const article of allArticles) {
    try {
      const imagePath = await generateImage(article, referenceImages);
      const updated = updateImageInFile(article, imagePath);
      if (updated) {
        console.log(`Updated reference for article ${article.id} in ${path.basename(article.sourceFile)}`);
      } else {
        console.log(`⚠️ Could not update article ${article.id} in ${path.basename(article.sourceFile)}`);
      }
    } catch (error) {
      console.error(`❌ Error for article ${article.id} (${article.title}): ${error.message}`);
    }
  }

  console.log('🎉 Generation complete!');
}

processAll();
