import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8';
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

function buildPrompt(article) {
  const summary = summarizeContent(article.content);

  return [
    `Create one photorealistic premium editorial real-estate image for the InvestDubai article titled "${article.title}".`,
    `Category: ${article.category}.`,
    `Article excerpt: ${article.excerpt}`,
    `Article content summary: ${summary}`,
    `The image must be directly related to the article topic and must also feel connected to InvestDubai's real brand universe in Dubai.`,
    `Use the attached company archive photos only as visual references for realism, tone, architecture quality, composition style, materials, locations, and authenticity.`,
    `Do not copy them literally, but keep the result natural, credible, and consistent with our real estate portfolio and visual identity.`,
    `Strict requirements: no humans, no people, no faces, no silhouettes, no workers, no crowds.`,
    `Avoid futuristic, sci-fi, cyberpunk, concept-art, CGI-heavy, or overly digital aesthetics.`,
    `Prioritize clean realistic architecture, villas, luxury interiors, facades, skyline views, urban environments, landscaped exteriors, construction details, or built environments relevant to the article.`,
    `Reuse the visual language of our archive imagery as much as possible so the image looks authentic rather than synthetic.`,
    `Add only a very subtle InvestDubai branding cue, such as a refined minimal accent using color #28de91.`,
    `Style: luxury real-estate photography, high-end corporate editorial, cinematic but realistic lighting, ultra-detailed, elegant, credible, 8K.`,
    `Do not include any text, typography, watermark, logo placement, infographic, dashboard UI, or interface overlay.`,
    `The final image must feel like a believable hero image for a premium Dubai real estate investment article.`,
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
