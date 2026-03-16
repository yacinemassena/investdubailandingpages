/**
 * Génération d'images IA pour articles Investopedia
 * Utilise Gemini API pour générer des images spécifiques à chaque article
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

const GEMINI_API_KEY = 'AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8';
const OUTPUT_FOLDER = '/Users/greenbull/Greenbull Dropbox/Marketing/PRODUCTION/Investdubai/investdubailandingpages-master/public/images/investopedia-ai';

// Articles avec prompts spécifiques - Style immobilier luxe Dubai, pas d'humains, réaliste
const ARTICLES = [
  {
    id: 1,
    title: "Real Estate Investment Introduction",
    prompt: "Aerial view of luxury Dubai Marina waterfront with premium residential towers at golden hour. Crystal clear water, yacht marina, modern architecture. Ultra realistic 8K photography, cinematic lighting. No people, no humans. Premium real estate photography style."
  },
  {
    id: 2,
    title: "House Flipping Definition",
    prompt: "Before and after luxury villa renovation in Dubai. Split image showing transformation: left side dated interior, right side stunning modern design with marble floors and designer lighting. No humans. 8K ultra realistic architectural photography."
  },
  {
    id: 3,
    title: "Rental vs Flipping",
    prompt: "Luxury Dubai villa exterior with infinity pool overlooking Palm Jumeirah at sunset. Modern minimalist architecture, lush landscaping. Premium real estate photography, golden hour lighting. No people. 8K resolution."
  },
  {
    id: 4,
    title: "Investment Profitability",
    prompt: "Stunning Dubai skyline view from luxury penthouse terrace at blue hour. Burj Khalifa visible, city lights beginning to glow. Premium interior visible through glass doors. No humans. Cinematic 8K photography."
  },
  {
    id: 5,
    title: "Gross vs Net Yield",
    prompt: "Modern Dubai office interior with panoramic city view through floor-to-ceiling windows. Minimalist design, premium furniture, subtle green accent lighting (#28de91). Corporate luxury aesthetic. No people. 8K."
  },
  {
    id: 6,
    title: "Cash Flow Explained",
    prompt: "Luxury Dubai apartment living room with marina view at sunset. Modern furniture, warm lighting, premium finishes. Wealth and passive income concept. No humans. Ultra realistic 8K real estate photography."
  },
  {
    id: 7,
    title: "Real Estate Investment Basics",
    prompt: "Aerial drone view of Emirates Hills luxury villa community in Dubai. Multiple premium properties with pools and gardens. Green landscaping, clear blue sky. No people. 8K drone photography."
  },
  {
    id: 8,
    title: "Payment Plans",
    prompt: "Modern Dubai real estate showroom with architectural models of luxury developments on display. Clean white space, premium lighting, subtle green branding (#28de91). No humans. Corporate photography 8K."
  },
  {
    id: 9,
    title: "Off-Plan Properties",
    prompt: "Construction site of luxury Dubai tower with completed rendering overlay showing final design. Modern architecture, crane in background, blue sky. Progress and development concept. No people. 8K."
  },
  {
    id: 10,
    title: "Dubai Investment Returns",
    prompt: "Panoramic Dubai skyline at golden hour with Burj Khalifa, Dubai Frame, and luxury towers. Warm sunset colors, clear sky. Prosperity and opportunity concept. No humans. Cinematic 8K cityscape."
  },
  {
    id: 11,
    title: "Villas vs Apartments",
    prompt: "Split comparison: luxury Dubai villa with pool on left, premium high-rise apartment with balcony view on right. Both at golden hour. Modern architecture. No people. 8K real estate photography."
  },
  {
    id: 12,
    title: "Best Dubai Neighborhoods",
    prompt: "Aerial view of Palm Jumeirah Dubai showing luxury villas and hotels. Crystal clear turquoise water, iconic palm shape visible. Sunny day, premium real estate. No humans. 8K drone photography."
  },
  {
    id: 13,
    title: "SPV Structure",
    prompt: "Modern DIFC Dubai corporate building interior lobby. Glass and steel architecture, premium materials, subtle green accent (#28de91). Professional business environment. No people. 8K architectural photography."
  },
  {
    id: 14,
    title: "DIFC Explained",
    prompt: "Dubai International Financial Centre Gate Building at blue hour. Iconic arch architecture, modern glass towers, city lights. Financial hub concept. No humans. Cinematic 8K photography."
  },
  {
    id: 15,
    title: "Escrow Account",
    prompt: "Modern bank vault concept in luxury Dubai setting. Secure steel door, premium marble surroundings, subtle green light accent (#28de91). Trust and security concept. No people. 8K."
  },
  {
    id: 16,
    title: "Oqood Certificate",
    prompt: "Dubai Land Department modern building exterior. Clean government architecture, UAE flag, blue sky. Official and trustworthy aesthetic. No humans. Professional 8K photography."
  },
  {
    id: 17,
    title: "Investment Security Dubai",
    prompt: "Luxury gated community entrance in Dubai with premium security gate and palm tree lined road. Modern villa visible behind. Safe investment concept. No people. 8K real estate photography."
  },
  {
    id: 18,
    title: "Developer Bankruptcy Protection",
    prompt: "Solid luxury Dubai villa construction showing premium materials and strong foundation. Quality craftsmanship visible, modern architecture. Security concept. No humans. 8K architectural photography."
  },
  {
    id: 19,
    title: "Investment Risk Management",
    prompt: "Dubai real estate stability concept: row of completed luxury villas in established community. Palm trees, blue sky, solid construction. No people. Premium 8K real estate photography."
  },
  {
    id: 20,
    title: "Capital Protection",
    prompt: "Luxury Dubai villa with visible premium construction quality. Modern architecture, infinity pool, landscaped garden. Secure investment visual. No humans. 8K photography."
  },
  {
    id: 21,
    title: "Real Estate Crowdfunding",
    prompt: "Aerial view of multiple luxury Dubai villas in premium community. Collective ownership concept, several properties visible. Blue pools, green gardens. No people. 8K drone photography."
  },
  {
    id: 22,
    title: "Dubai Crowdfunding",
    prompt: "Modern Dubai villa with fractional ownership concept. Premium architecture, pool, garden. Subtle green accent elements (#28de91). Shared investment visual. No humans. 8K."
  },
  {
    id: 23,
    title: "Minimum Investment",
    prompt: "Welcoming entrance to luxury Dubai villa community. Open gate, palm trees, premium properties visible. Accessible luxury concept. No people. Golden hour 8K photography."
  },
  {
    id: 24,
    title: "Crowdfunding Security",
    prompt: "Secure luxury Dubai property with premium construction. Gated entrance, solid architecture, established neighborhood. Trust and safety concept. No humans. 8K real estate photography."
  },
  {
    id: 25,
    title: "Investment Risk",
    prompt: "Stable Dubai luxury real estate: solid villa with strong foundation visible. Quality materials, modern design, blue sky. Risk awareness concept. No people. 8K architectural photography."
  },
  {
    id: 26,
    title: "Project Management",
    prompt: "Luxury villa renovation in progress in Dubai. Professional construction site, premium materials stacked, organized workflow. Quality control concept. No workers visible, just materials and work. 8K."
  },
  {
    id: 27,
    title: "Project Selection",
    prompt: "Curated selection of premium Dubai villas from aerial view. Jumeirah Islands community, multiple luxury properties. Selection and quality concept. No people. 8K drone photography."
  },
  {
    id: 28,
    title: "French Tax Declaration",
    prompt: "Dubai-France connection: luxury Dubai property with elegant European design elements. International investment concept. Premium villa, sophisticated architecture. No humans. 8K."
  },
  {
    id: 29,
    title: "Capital Gains Tax Dubai",
    prompt: "Dubai tax-free investment concept: luxury villa with wealth growth visual. Premium property, clear skies, prosperity aesthetic. Golden hour. No people. 8K real estate photography."
  },
  {
    id: 30,
    title: "Dubai Market Overview",
    prompt: "Stunning Dubai downtown skyline with Burj Khalifa at center. Modern towers, clear sky, urban development. Market strength concept. No humans. Cinematic 8K cityscape photography."
  }
];

// Générer une image avec Gemini Imagen 3
async function generateImage(article) {
  return new Promise((resolve) => {
    const body = JSON.stringify({
      instances: [
        {
          prompt: article.prompt
        }
      ],
      parameters: {
        sampleCount: 1,
        aspectRatio: "16:9",
        personGeneration: "dont_allow"
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/imagen-3.0-generate-002:predict?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          
          if (response.error) {
            console.log(`   ❌ API Error: ${response.error.message}`);
            resolve(null);
            return;
          }
          
          if (response.predictions?.[0]?.bytesBase64Encoded) {
            const outputPath = path.join(OUTPUT_FOLDER, `article-${article.id}.jpg`);
            fs.writeFileSync(outputPath, Buffer.from(response.predictions[0].bytesBase64Encoded, 'base64'));
            resolve(outputPath);
            return;
          }
          
          console.log(`   ⚠️ No image in response`);
          resolve(null);
        } catch (e) {
          console.log(`   ❌ Parse error: ${e.message}`);
          resolve(null);
        }
      });
    });

    req.on('error', (e) => {
      console.log(`   ❌ Request error: ${e.message}`);
      resolve(null);
    });
    
    req.setTimeout(60000, () => {
      console.log(`   ❌ Timeout`);
      req.destroy();
      resolve(null);
    });
    
    req.write(body);
    req.end();
  });
}

// Délai entre requêtes
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main
async function main() {
  console.log('\n🎨 GÉNÉRATION D\'IMAGES IA - InvestDubai\n');
  console.log('━'.repeat(60));
  console.log(`📁 Output: ${OUTPUT_FOLDER}`);
  console.log(`🔑 API: Gemini 2.0 Flash`);
  console.log('━'.repeat(60));
  
  if (!fs.existsSync(OUTPUT_FOLDER)) {
    fs.mkdirSync(OUTPUT_FOLDER, { recursive: true });
  }

  let success = 0;
  let failed = 0;

  for (const article of ARTICLES) {
    console.log(`\n[${article.id}/${ARTICLES.length}] ${article.title}`);
    console.log(`   🎨 Generating with Gemini...`);
    
    const result = await generateImage(article);
    
    if (result) {
      const stats = fs.statSync(result);
      console.log(`   ✅ Generated: ${Math.round(stats.size/1024)}KB`);
      success++;
    } else {
      console.log(`   ❌ Failed`);
      failed++;
    }
    
    // Délai pour éviter rate limiting
    await delay(3000);
  }

  console.log('\n' + '━'.repeat(60));
  console.log('📊 RÉSUMÉ');
  console.log('━'.repeat(60));
  console.log(`✅ Générées: ${success}`);
  console.log(`❌ Échecs: ${failed}`);
  console.log('━'.repeat(60) + '\n');
}

main().catch(console.error);
