import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Nano Banana Pro API (Gemini Image Generation)
const API_KEY = 'AIzaSyBagqY1S_L_wPJs-KEI7-sAEaz8YaFfCQw';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

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

// Visual themes for different article categories - villa-focused, minimalist
const CATEGORY_THEMES = {
  'Investment Basics': [
    'elegant marble desk surface with gold pen and leather portfolio',
    'minimalist white villa living room with floor-to-ceiling windows',
    'clean architectural lines of modern Dubai villa exterior',
    'premium oak desk with brass lamp and investment documents',
  ],
  'Dubai Real Estate Market': [
    'Dubai skyline view from luxury penthouse terrace at golden hour',
    'aerial view of Palm Jumeirah villas and coastline',
    'pristine villa pool reflecting modern architecture',
    'Dubai Marina towers seen through floor-to-ceiling glass',
  ],
  'Strategy & Positioning': [
    'chess pieces on marble surface with soft natural light',
    'minimalist boardroom table with city view beyond',
    'compass on leather-bound journal, warm ambient light',
    'clean white desk with architectural blueprints rolled',
  ],
  'Legal Structure & Framework': [
    'leather-bound legal documents on mahogany desk',
    'elegant fountain pen on contract papers',
    'minimalist office with books and natural light',
    'brass scales on marble pedestal, soft lighting',
  ],
  'Security & Risk Management': [
    'secure vault door in minimalist interior',
    'premium safe with gold accents in modern room',
    'fortress-like villa architecture, strong clean lines',
    'reinforced glass and steel modern construction detail',
  ],
  'Crowdfunding & Fractional Ownership': [
    'multiple keys on elegant marble tray',
    'connected geometric sculptures on glass table',
    'puzzle pieces in gold on white background',
    'minimalist representation of shared ownership',
  ],
  'Money & Profits': [
    'gold bars stacked on marble surface',
    'premium watches and accessories on leather tray',
    'crystal glassware on villa bar counter',
    'polished coins on dark wood desk',
  ],
  'Taxation': [
    'calculator and documents on clean white desk',
    'elegant filing system in modern home office',
    'minimalist tax documents with gold paperweight',
    'modern home office with palm tree view',
  ],
  'Financing & Mortgages': [
    'house keys on signed contract, natural light',
    'bank check and fountain pen on desk',
    'property documents with wax seal',
    'elegant folder with villa brochures',
  ],
  'Glossary': [
    'open dictionary on wooden reading stand',
    'vintage magnifying glass on documents',
    'minimalist bookshelf with leather volumes',
    'elegant typewriter on clean desk',
  ],
  // Neighborhood-specific themes
  'Downtown Dubai': [
    'Burj Khalifa reflection in villa pool at dusk',
    'Downtown Dubai skyline from rooftop terrace',
    'modern high-rise architecture with clean lines',
    'luxury apartment interior with Dubai Mall view',
  ],
  'Business Bay': [
    'Business Bay canal reflections at sunset',
    'modern tower architecture Business Bay',
    'sleek office interior with canal view',
    'contemporary apartment with floor-to-ceiling windows',
  ],
  'Dubai Marina': [
    'yacht marina view from penthouse balcony',
    'Marina Walk promenade at golden hour',
    'luxury tower facade with marina backdrop',
    'modern apartment interior with sea view',
  ],
  'Palm Jumeirah': [
    'Palm Jumeirah villa with private beach',
    'aerial view of Palm fronds and villas',
    'beachfront villa exterior at sunset',
    'infinity pool overlooking Arabian Gulf',
  ],
  'Emirates Hills': [
    'sprawling Emirates Hills villa with manicured garden',
    'golf course view from luxury villa terrace',
    'Mediterranean-style villa facade',
    'grand villa entrance with water feature',
  ],
  'Dubai Hills Estate': [
    'modern villa in Dubai Hills with park view',
    'contemporary architecture Dubai Hills',
    'family villa with landscaped garden',
    'clean lines of new Dubai Hills development',
  ],
  'JBR': [
    'JBR beachfront at golden hour',
    'Ain Dubai ferris wheel from beach apartment',
    'The Walk JBR with palm trees',
    'beachfront apartment terrace view',
  ],
  'Arabian Ranches': [
    'Spanish-style villa Arabian Ranches',
    'desert landscaping and villa architecture',
    'family villa with private garden',
    'community villa with traditional design',
  ],
  'JVC': [
    'modern affordable villa JVC',
    'new development clean architecture',
    'family-friendly community villa',
    'contemporary townhouse exterior',
  ],
  default: [
    'luxury Dubai villa with pool and palm trees',
    'modern minimalist villa interior with marble floors',
    'elegant villa terrace with desert landscape view',
    'premium villa entrance with water feature',
  ],
};

function extractArticlesFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return [];
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const articles = [];
  
  // More flexible regex to capture article objects
  const objectRegex = /{\s*id:\s*(\d+),[\s\S]*?category:\s*['"]([^'"]+)['"],[\s\S]*?title:\s*['"]([^'"]+)['"],[\s\S]*?excerpt:\s*['"]([^'"]*)['"],[\s\S]*?content:\s*[`'"][\s\S]*?[`'"],[\s\S]*?slug:\s*['"]([^'"]+)['"],[\s\S]*?image:\s*['"]([^'"]+)['"]/g;

  let match;
  while ((match = objectRegex.exec(content)) !== null) {
    articles.push({
      id: Number(match[1]),
      category: match[2],
      title: match[3],
      excerpt: match[4],
      slug: match[5],
      currentImage: match[6],
      sourceFile: filePath,
    });
  }

  return articles;
}

function extractAllArticles() {
  const allArticles = [];
  for (const filePath of articleFiles) {
    const articles = extractArticlesFromFile(filePath);
    allArticles.push(...articles);
  }
  return allArticles;
}

function getThemeForArticle(article) {
  // Find matching category theme
  const categoryKey = Object.keys(CATEGORY_THEMES).find(
    key => article.category.toLowerCase().includes(key.toLowerCase()) ||
           key.toLowerCase().includes(article.category.toLowerCase())
  );
  
  const themes = CATEGORY_THEMES[categoryKey] || CATEGORY_THEMES.default;
  
  // Select theme based on article id for variety
  return themes[article.id % themes.length];
}

function getArticleSpecificCue(article) {
  const text = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();

  const cueRules = [
    { keywords: ['roi', 'return', 'rentable', 'profitability', 'rentabilité'], cue: 'an elegant open notebook on a marble desk showing a simple upward hand-drawn ROI sketch, no readable text' },
    { keywords: ['gross yield', 'net yield', 'rendement brut', 'rendement net', 'yield'], cue: 'two refined stacks of property documents and a gold pen arranged for comparison on a marble desk, no readable text' },
    { keywords: ['cash flow', 'cash-flow'], cue: 'a minimalist notebook with flowing line sketches beside a brass pen and villa window view, no readable text' },
    { keywords: ['capital appreciation', 'appreciation', 'value grow', 'valorisation'], cue: 'a sophisticated notebook with ascending stepped blocks in the foreground symbolizing value growth inside a luxury villa setting' },
    { keywords: ['flip', 'flipping', 'house flipping', 'achat-revente'], cue: 'rolled renovation plans, premium material samples, and villa keys on a marble island inside a high-end Dubai villa' },
    { keywords: ['rental', 'rent', 'locatif'], cue: 'villa keys resting on a refined tray beside a lease folder on a minimalist desk, no readable text' },
    { keywords: ['investment basics', 'real estate investment', 'investissement immobilier'], cue: 'a leather investment notebook and brass pen on a marble table within a premium minimalist villa interior' },
    { keywords: ['payment plan', 'plan de paiement', 'installment'], cue: 'a sequence of three elegant envelopes or folders arranged in order on a marble desk to suggest staged payments' },
    { keywords: ['off-plan', 'oqood', 'construction'], cue: 'architectural plans, a scale model fragment, and premium stone samples in a clean villa sales-gallery style composition' },
    { keywords: ['spv', 'special purpose vehicle'], cue: 'a refined corporate folder, wax-sealed document, and single villa key on a legal desk, no readable text' },
    { keywords: ['difc', 'legal', 'framework', 'cadre légal'], cue: 'elegant legal binders, a brass pen, and a sculptural balance object in a premium office interior, no readable text' },
    { keywords: ['escrow'], cue: 'a secure deposit box drawer slightly open within a luxurious minimalist environment, paired with property documents, no readable text' },
    { keywords: ['secure', 'security', 'risk', 'protégé', 'protected'], cue: 'a luxury villa seen through strong framed glass with a secure safe and documents in the foreground' },
    { keywords: ['crowdfunding', 'fractional', 'co-ownership', 'ownership'], cue: 'several identical elegant villa keys arranged symmetrically on a marble tray to symbolize shared ownership' },
    { keywords: ['minimum investment', 'combien faut-il investir', 'ticket d’entrée'], cue: 'a small stack of refined chips or tokens beside villa keys on a premium desk, suggesting accessible entry size' },
    { keywords: ['mortgage', 'financing', 'loan', 'financement'], cue: 'a signed property folder, villa key, and calculator on a marble desk, no screen, no readable text' },
    { keywords: ['tax', 'taxation', 'fiscal'], cue: 'organized tax folders, calculator, and brass paperweight on a minimalist home office desk, no readable text' },
    { keywords: ['glossary', 'definition', 'what is', 'qu’est-ce'], cue: 'an open premium reference book with a magnifying glass on a refined desk in a villa library, no readable text' },
    { keywords: ['downtown dubai', 'burj khalifa'], cue: 'Downtown Dubai skyline clearly framed through a premium interior with a refined property notebook in the foreground' },
    { keywords: ['business bay'], cue: 'Business Bay canal and towers framed from a premium interior with a property folder in the foreground' },
    { keywords: ['dubai marina', 'marina'], cue: 'Dubai Marina towers and yachts visible from a luxury terrace with a refined notebook on the table' },
    { keywords: ['palm jumeirah', 'palm'], cue: 'Palm Jumeirah beachfront villa context with a premium property folder and sea view' },
    { keywords: ['emirates hills'], cue: 'golf-facing Emirates Hills villa terrace with premium property documents on a table' },
    { keywords: ['dubai hills'], cue: 'Dubai Hills villa with park view and architectural brochure on a marble table, no readable text' },
    { keywords: ['jbr'], cue: 'JBR beachfront view from a high-end apartment with a refined notebook in the foreground' },
    { keywords: ['arabian ranches'], cue: 'Arabian Ranches villa courtyard with elegant property folder and keys on an outdoor table' },
    { keywords: ['jvc'], cue: 'clean modern townhouse setting with a property notebook and keys in foreground' },
  ];

  for (const rule of cueRules) {
    if (rule.keywords.some((keyword) => text.includes(keyword))) {
      return rule.cue;
    }
  }

  return 'a refined notebook or property folder placed prominently in the foreground to connect the image to the article topic';
}

function buildPrompt(article) {
  const themeVisual = getThemeForArticle(article);
  const articleCue = getArticleSpecificCue(article);
  
  const basePrompt = `Premium real estate photography for Dubai luxury investment article.

Topic: "${article.title}"
Category: ${article.category}

Visual concept: ${themeVisual}
Article-specific foreground cue: ${articleCue}

STYLE REQUIREMENTS:
- Luxury villa aesthetic, Dubai real estate style
- Clean, minimalist composition
- Warm natural lighting, golden hour preferred
- High-end architectural photography look
- Premium materials: marble, gold accents, natural wood, glass
- Muted elegant color palette with subtle warmth
- The image must clearly communicate the article topic through one strong physical cue or object
- Put that cue in the foreground or midground so the subject is obvious at first glance
- The cue should feel naturally integrated into a real luxury villa, office, terrace, or property setting
- Keep the scene simple: one main cue, one premium environment, no clutter

STRICT RULES - DO NOT INCLUDE:
- No humans, no people, no faces, no silhouettes, no hands
- No technology devices (phones, laptops, screens)
- No text, logos, watermarks, or typography
- No cheap or stock photo aesthetics
- No cluttered compositions
- No artificial or CGI look

QUALITY:
- Photorealistic, editorial quality
- 8K resolution feel
- Professional real estate photography
- Magazine cover worthy
- Sophisticated and elegant

COMPOSITION:
- Make the article-specific cue unmistakable
- Avoid generic empty interiors unless the article is specifically about architecture or location
- If using documents or notebooks, show no readable text, only elegant abstract markings or blank pages
- The result should feel directly related to "${article.title}" while still matching InvestDubai villa aesthetics`;

  return basePrompt;
}

async function generateImageWithGemini(article) {
  const prompt = buildPrompt(article);
  
  console.log(`\n🎨 Generating image for Article ${article.id}: "${article.title}"`);
  console.log(`   Category: ${article.category}`);
  
  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          responseModalities: ["TEXT", "IMAGE"]
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error ${response.status}: ${errorText.slice(0, 500)}`);
    }

    const data = await response.json();
    
    // Find the image part in the response
    const imagePart = data?.candidates?.[0]?.content?.parts?.find(
      (part) => part.inlineData?.data
    );

    if (!imagePart) {
      console.log('Response structure:', JSON.stringify(data, null, 2).slice(0, 1000));
      throw new Error('No image data in response');
    }

    const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
    const fileName = `article-${article.id}.jpg`;
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, buffer);
    console.log(`   ✅ Saved: ${fileName}`);

    return `/images/investopedia-ai/${fileName}`;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    throw error;
  }
}

function updateImageInFile(article, newImagePath) {
  let content = fs.readFileSync(article.sourceFile, 'utf8');
  
  // Create regex to match the image property for this specific article
  const regex = new RegExp(
    `(id:\\s*${article.id},[\\s\\S]*?image:\\s*['"])([^'"]*)((['"]))`
  );

  if (!regex.test(content)) {
    return false;
  }

  content = content.replace(regex, `$1${newImagePath}$3`);
  fs.writeFileSync(article.sourceFile, content, 'utf8');
  return true;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processArticles(startId = 1, endId = null, skipExisting = true) {
  const allArticles = extractAllArticles();
  
  console.log(`\n📚 Found ${allArticles.length} total articles`);
  console.log(`📁 Output directory: ${outputDir}\n`);

  // Filter articles by ID range if specified
  let articlesToProcess = allArticles;
  if (endId !== null) {
    articlesToProcess = allArticles.filter(a => a.id >= startId && a.id <= endId);
  } else {
    articlesToProcess = allArticles.filter(a => a.id >= startId);
  }

  console.log(`🎯 Processing articles ${startId} to ${endId || 'end'} (${articlesToProcess.length} articles)\n`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const article of articlesToProcess) {
    // Check if image already exists
    const existingPath = path.join(outputDir, `article-${article.id}.jpg`);
    if (skipExisting && fs.existsSync(existingPath)) {
      console.log(`⏭️  Skipping Article ${article.id} (already exists)`);
      skipCount++;
      continue;
    }

    try {
      const imagePath = await generateImageWithGemini(article);
      
      const updated = updateImageInFile(article, imagePath);
      if (updated) {
        console.log(`   📝 Updated source file reference`);
      }
      
      successCount++;
      
      // Rate limiting - wait between requests
      await delay(2000);
    } catch (error) {
      errorCount++;
      console.error(`   Failed: ${error.message}`);
      
      // Wait longer on error (might be rate limited)
      await delay(5000);
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`🎉 Generation complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ⏭️  Skipped: ${skipCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log(`${'='.repeat(50)}\n`);

  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    totalArticles: allArticles.length,
    processed: articlesToProcess.length,
    success: successCount,
    skipped: skipCount,
    errors: errorCount,
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'generation-report.json'),
    JSON.stringify(report, null, 2)
  );
}

// Parse command line arguments
const args = process.argv.slice(2);
let startId = 1;
let endId = null;
let skipExisting = true;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--start' && args[i + 1]) {
    startId = parseInt(args[i + 1], 10);
  }
  if (args[i] === '--end' && args[i + 1]) {
    endId = parseInt(args[i + 1], 10);
  }
  if (args[i] === '--regenerate') {
    skipExisting = false;
  }
}

console.log('\n🖼️  InvestDubai Investopedia Image Generator');
console.log('   Using Nano Banana Pro API (Gemini Image Generation)');
console.log('   Style: Luxury villa, minimalist, no humans/tech\n');

processArticles(startId, endId, skipExisting);
