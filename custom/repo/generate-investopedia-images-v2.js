/**
 * Générateur d'images pour articles Investopedia - InvestDubai
 * 
 * Priorité: images locales existantes > génération Gemini
 * Style: photographie immobilière de luxe, réaliste, pas d'humains
 * 
 * Usage: node generate-investopedia-images-v2.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

const GEMINI_API_KEY = 'AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8';
const PROJECT_ROOT = '/Users/greenbull/Greenbull Dropbox/Marketing/PRODUCTION/Investdubai/investdubailandingpages-master';
const OUTPUT_FOLDER = `${PROJECT_ROOT}/public/images/investopedia-ai`;

// Dossiers d'images locales
const IMAGE_FOLDERS = [
  `${PROJECT_ROOT}/public/images`,
  `${PROJECT_ROOT}/images`,
  `${PROJECT_ROOT}/flip photo`,
  `${PROJECT_ROOT}/public`,
  `${PROJECT_ROOT}/src/assets`,
  `${PROJECT_ROOT}/Website`,
];

// Articles avec prompts spécifiques adaptés au sujet
const ARTICLES = [
  {
    id: 1,
    title: "Différence investissement locatif vs flip immobilier",
    localMatch: ['flip', 'villa'],
    prompt: "Split view comparison: left side shows a modern Dubai apartment building with 'FOR RENT' concept, right side shows a luxury villa under renovation with construction materials. Clean architectural photography, golden hour lighting, Dubai skyline in background. No humans. 8K ultra realistic real estate photography."
  },
  {
    id: 2,
    title: "Qu'est-ce qu'un flip immobilier",
    localMatch: ['flip'],
    prompt: "Before and after transformation of a luxury Dubai villa. Left: dated interior. Right: stunning modern renovation with marble floors, designer furniture. Dramatic lighting, premium real estate photography style. No humans. Subtle green accent #28de91. 8K resolution."
  },
  {
    id: 3,
    title: "Durée d'un flip à Dubaï",
    localMatch: ['flip', 'villa'],
    prompt: "Aerial view of a luxury villa renovation project in Dubai with Palm Jumeirah visible in background. Construction timeline concept with phases visible. Golden hour, cinematic lighting. No humans. Premium architectural photography. 8K."
  },
  {
    id: 4,
    title: "Rentabilité d'un investissement",
    localMatch: ['villa', 'interior'],
    prompt: "Luxurious Dubai penthouse interior with floor-to-ceiling windows showing city skyline at sunset. Modern minimalist design, marble and gold accents. Concept of wealth and returns. No humans. Cinematic real estate photography. 8K."
  },
  {
    id: 5,
    title: "Rendement brut vs rendement net",
    localMatch: ['interior', 'villa'],
    prompt: "Modern Dubai office space with glass walls overlooking Burj Khalifa. Clean desk with financial documents concept. Premium corporate interior, subtle green accent #28de91. No humans. Professional architectural photography. 8K."
  },
  {
    id: 6,
    title: "Qu'est-ce qu'un cash-flow",
    localMatch: ['interior', 'villa'],
    prompt: "Luxury Dubai marina apartment with stunning water view. Modern interior with premium finishes suggesting passive income and wealth. Evening golden light. No humans. High-end real estate photography. 8K."
  },
  {
    id: 7,
    title: "Qu'est-ce qu'un investissement immobilier",
    localMatch: ['villa'],
    prompt: "Stunning aerial view of Dubai luxury residential area with multiple premium villas, pools, and palm trees. Clear blue sky, golden hour lighting. Investment opportunity concept. No humans. Drone photography style. 8K."
  },
  {
    id: 8,
    title: "Qu'est-ce qu'un plan de paiement",
    localMatch: ['villa', 'interior'],
    prompt: "Modern Dubai real estate showroom with architectural models of luxury villas on display. Clean minimalist space, premium materials. Subtle green accent #28de91. No humans. Corporate interior photography. 8K."
  },
  {
    id: 9,
    title: "Qu'est-ce qu'un bien off-plan",
    localMatch: ['villa'],
    prompt: "3D architectural rendering of a luxury Dubai villa project under construction, with the finished design overlay. Modern architecture, pool, garden. Construction cranes in soft background. No humans. Architectural visualization. 8K."
  },
  {
    id: 10,
    title: "Investir à Dubaï est-ce rentable",
    localMatch: ['villa'],
    prompt: "Panoramic Dubai skyline at golden hour with Burj Khalifa, luxury towers, and Palm Jumeirah visible. Wealth and opportunity concept. Cinematic wide shot. No humans. Premium cityscape photography. 8K."
  },
  {
    id: 11,
    title: "Villas vs appartements",
    localMatch: ['villa'],
    prompt: "Side by side: luxury Dubai villa with private pool and garden on left, premium high-rise apartment with skyline view on right. Comparison concept. Golden hour lighting. No humans. Real estate photography. 8K."
  },
  {
    id: 12,
    title: "Meilleurs quartiers pour investir à Dubaï",
    localMatch: ['villa'],
    prompt: "Aerial view of Palm Jumeirah and Jumeirah Islands luxury communities in Dubai. Crystal clear water, premium villas, lush greenery. Map/location concept. No humans. Drone photography. 8K."
  },
  {
    id: 13,
    title: "Qu'est-ce qu'une SPV",
    localMatch: ['interior'],
    prompt: "Modern Dubai corporate office interior with glass walls, premium furniture, and city view. Legal/business structure concept. Clean minimalist design, subtle green accent #28de91. No humans. Corporate photography. 8K."
  },
  {
    id: 14,
    title: "Qu'est-ce que le DIFC",
    localMatch: ['interior'],
    prompt: "Dubai International Financial Centre (DIFC) modern architecture at blue hour. Glass towers, premium corporate buildings, Gate Building visible. Financial hub concept. No humans. Architectural photography. 8K."
  },
  {
    id: 15,
    title: "Qu'est-ce qu'un escrow account",
    localMatch: ['interior'],
    prompt: "Modern bank vault door concept in luxury Dubai setting. Security and trust visual. Premium materials, subtle green accent #28de91. Clean architectural detail. No humans. Corporate photography. 8K."
  },
  {
    id: 16,
    title: "Qu'est-ce qu'un Oqood",
    localMatch: ['villa'],
    prompt: "Dubai Land Department building exterior or modern government office architecture. Official, trustworthy aesthetic. Clean lines, premium materials. No humans. Architectural photography. 8K."
  },
  {
    id: 17,
    title: "Sécurité d'investir à Dubaï",
    localMatch: ['villa'],
    prompt: "Luxury gated community entrance in Dubai with premium security features. Palm trees, modern architecture, safe neighborhood concept. Golden hour. No humans. Real estate photography. 8K."
  },
  {
    id: 18,
    title: "Si le promoteur fait faillite",
    localMatch: ['villa', 'interior'],
    prompt: "Solid luxury villa in Dubai with SPV ownership concept. Strong foundation, premium construction, secure investment visual. Architectural detail showing quality. No humans. Real estate photography. 8K."
  },
  {
    id: 19,
    title: "Peut-on perdre son argent à Dubaï",
    localMatch: ['villa'],
    prompt: "Dubai real estate market concept: luxury properties with stable foundation visual. Premium villas, solid architecture, risk management aesthetic. Balanced composition. No humans. Architectural photography. 8K."
  },
  {
    id: 20,
    title: "Protection du capital",
    localMatch: ['villa', 'interior'],
    prompt: "Luxury Dubai villa with visible premium construction quality. Strong structure, high-end materials, secure investment concept. Architectural detail. No humans. Real estate photography. 8K."
  },
  {
    id: 21,
    title: "Qu'est-ce que le crowdfunding immobilier",
    localMatch: ['flip', 'villa'],
    prompt: "Multiple luxury Dubai villas in a premium community, collective investment concept. Aerial view showing several properties. Shared ownership visual. No humans. Drone photography. 8K."
  },
  {
    id: 22,
    title: "Crowdfunding à Dubaï",
    localMatch: ['flip', 'villa'],
    prompt: "Dubai luxury villa with multiple ownership shares concept. Modern architecture, premium finishes, collaborative investment visual. Subtle green accent #28de91. No humans. Real estate photography. 8K."
  },
  {
    id: 23,
    title: "Investissement minimum",
    localMatch: ['flip'],
    prompt: "Accessible luxury: Dubai villa entrance with welcoming aesthetic. Premium but approachable investment concept. Modern architecture, clean lines. Subtle green accent #28de91. No humans. Real estate photography. 8K."
  },
  {
    id: 24,
    title: "Sécurité du crowdfunding immobilier",
    localMatch: ['villa'],
    prompt: "Secure Dubai luxury property with premium construction visible. Trust and safety concept in real estate. Solid architecture, gated community. No humans. Architectural photography. 8K."
  },
  {
    id: 25,
    title: "Peut-on perdre son argent",
    localMatch: ['villa'],
    prompt: "Dubai real estate stability concept: solid luxury villa with strong foundation. Risk awareness visual, premium construction quality. Balanced composition. No humans. Real estate photography. 8K."
  },
  {
    id: 26,
    title: "Qui gère le projet et les travaux",
    localMatch: ['flip'],
    prompt: "Luxury villa renovation in progress in Dubai. Professional construction site, premium materials, organized workflow. Project management concept. No humans visible, just the work. Construction photography. 8K."
  },
  {
    id: 27,
    title: "Sélection des projets",
    localMatch: ['villa'],
    prompt: "Curated selection of premium Dubai villas aerial view. Palm Jumeirah, Jumeirah Islands visible. Selection and quality control concept. Drone photography, golden hour. No humans. 8K."
  },
  {
    id: 28,
    title: "Déclarer un bien à Dubaï en France",
    localMatch: ['interior'],
    prompt: "Dubai-France connection concept: luxury Dubai property with subtle French elegance. International investment visual. Premium interior, sophisticated design. No humans. Real estate photography. 8K."
  },
  {
    id: 29,
    title: "Taxe sur la plus-value à Dubaï",
    localMatch: ['villa'],
    prompt: "Dubai tax-free investment concept: luxury villa with wealth growth visual. Premium property, clear skies, prosperity aesthetic. Golden hour lighting. No humans. Real estate photography. 8K."
  }
];

// Images locales par catégorie
const LOCAL_IMAGES = {
  flip: ['flip-1.jpg', 'flip-9.jpg', 'flip-12.jpg', 'flip-13.jpg', 'flip-25.jpg', 'flip-26.jpg', 'flip-27.jpg', 'flip-28.jpg', 'flip-29.jpg', 'flip-30.jpg', 'flip-31.jpg', 'flip-32.jpg', 'flip-36.jpg'],
  villa: ['0A6A5723.jpg', '0A6A5728.jpg', '0A6A5754.jpg', '0A6A5756.jpg', '0A6A5758.jpg', '0A6A6039.jpg'],
  interior: ['0K8A7227.jpg', '0K8A7233.jpg', '0K8A7239.jpg', '0K8A7245.jpg', '0K8A7248.jpg', '0K8A7257.jpg', '0K8A7267.jpg'],
  misc: ['IMG_1116.jpg', 'IMG_1358.jpg', 'IMG_1369.jpg', 'IMG_2218.JPG', 'IMG_2230.JPG', 'IMG_2443.JPG']
};

const usedLocalImages = new Set();

// Trouver une image locale
function findLocalImage(categories) {
  for (const cat of categories) {
    const images = LOCAL_IMAGES[cat] || [];
    for (const img of images) {
      if (!usedLocalImages.has(img)) {
        // Chercher le fichier
        for (const folder of IMAGE_FOLDERS) {
          const fullPath = path.join(folder, img);
          if (fs.existsSync(fullPath)) {
            usedLocalImages.add(img);
            return fullPath;
          }
        }
      }
    }
  }
  return null;
}

// Générer avec Gemini
async function generateWithGemini(prompt, outputPath) {
  return new Promise((resolve) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: `Generate this image: ${prompt}` }] }],
      generationConfig: {
        responseModalities: ["image", "text"],
        responseMimeType: "image/jpeg"
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.candidates?.[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
              if (part.inlineData?.data) {
                fs.writeFileSync(outputPath, Buffer.from(part.inlineData.data, 'base64'));
                resolve(true);
                return;
              }
            }
          }
          if (response.error) {
            console.log(`   ⚠️ Gemini error: ${response.error.message}`);
          }
          resolve(false);
        } catch (e) {
          console.log(`   ⚠️ Parse error: ${e.message}`);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => {
      console.log(`   ⚠️ Request error: ${e.message}`);
      resolve(false);
    });
    
    req.write(body);
    req.end();
  });
}

// Délai entre les requêtes API
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main
async function main() {
  console.log('\n🖼️  Générateur d\'images Investopedia - InvestDubai\n');
  console.log('━'.repeat(60));
  
  if (!fs.existsSync(OUTPUT_FOLDER)) {
    fs.mkdirSync(OUTPUT_FOLDER, { recursive: true });
  }

  const results = [];
  let localCount = 0;
  let geminiCount = 0;
  let existingCount = 0;
  let failedCount = 0;

  for (const article of ARTICLES) {
    const outputPath = path.join(OUTPUT_FOLDER, `article-${article.id}.jpg`);
    console.log(`\n[${article.id}] ${article.title}`);

    // Vérifier si existe déjà
    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);
      if (stats.size > 50000) { // > 50KB = probablement une vraie image
        console.log(`   ✅ Existe déjà (${Math.round(stats.size/1024)}KB)`);
        results.push({ id: article.id, source: 'existing' });
        existingCount++;
        continue;
      }
    }

    // Chercher image locale
    const localImage = findLocalImage(article.localMatch);
    if (localImage) {
      fs.copyFileSync(localImage, outputPath);
      console.log(`   📁 Image locale: ${path.basename(localImage)}`);
      results.push({ id: article.id, source: 'local', file: path.basename(localImage) });
      localCount++;
      continue;
    }

    // Générer avec Gemini
    console.log(`   🎨 Génération Gemini...`);
    const success = await generateWithGemini(article.prompt, outputPath);
    
    if (success) {
      const stats = fs.statSync(outputPath);
      console.log(`   ✅ Généré (${Math.round(stats.size/1024)}KB)`);
      results.push({ id: article.id, source: 'gemini' });
      geminiCount++;
    } else {
      // Fallback: utiliser n'importe quelle image locale disponible
      const fallback = findLocalImage(['villa', 'flip', 'interior', 'misc']);
      if (fallback) {
        fs.copyFileSync(fallback, outputPath);
        console.log(`   ⚠️ Fallback: ${path.basename(fallback)}`);
        results.push({ id: article.id, source: 'fallback', file: path.basename(fallback) });
        localCount++;
      } else {
        console.log(`   ❌ Échec`);
        results.push({ id: article.id, source: 'failed' });
        failedCount++;
      }
    }

    // Délai pour éviter rate limiting
    await delay(2000);
  }

  // Résumé
  console.log('\n' + '━'.repeat(60));
  console.log('📊 RÉSUMÉ');
  console.log('━'.repeat(60));
  console.log(`Total articles:    ${ARTICLES.length}`);
  console.log(`Déjà existantes:   ${existingCount} ✅`);
  console.log(`Images locales:    ${localCount} 📁`);
  console.log(`Générées Gemini:   ${geminiCount} 🎨`);
  console.log(`Échecs:            ${failedCount} ❌`);
  console.log('━'.repeat(60));

  // Sauvegarder rapport
  const reportPath = path.join(OUTPUT_FOLDER, 'generation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    date: new Date().toISOString(),
    stats: { existing: existingCount, local: localCount, gemini: geminiCount, failed: failedCount },
    results
  }, null, 2));
  console.log(`\n📄 Rapport: ${reportPath}\n`);
}

main().catch(console.error);
