/**
 * Générateur d'images pour les articles InvestDubai
 * 
 * Cherche d'abord une image locale, sinon génère avec Gemini
 * 
 * Usage: node generate-article-images.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

// Configuration
const GEMINI_API_KEY = 'AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8';
const PROJECT_ROOT = '/Users/greenbull/Greenbull Dropbox/Marketing/PRODUCTION/Investdubai/investdubailandingpages-master';
const OUTPUT_FOLDER = `${PROJECT_ROOT}/public/images/investopedia-ai`;

// Dossiers à scanner pour les images existantes
const IMAGE_FOLDERS = [
  `${PROJECT_ROOT}/public/images`,
  `${PROJECT_ROOT}/images`,
  `${PROJECT_ROOT}/flip photo`,
  `${PROJECT_ROOT}/public`,
];

// Articles à traiter
const ARTICLES = [
  { id: 1, title: "Quelle est la différence entre investissement locatif et flip immobilier ?", category: "Bases de l'investissement" },
  { id: 2, title: "Qu'est-ce qu'un flip immobilier ?", category: "Bases de l'investissement" },
  { id: 3, title: "Combien de temps dure un flip à Dubaï ?", category: "Bases de l'investissement" },
  { id: 4, title: "Comment savoir si mon investissement est rentable ?", category: "Bases de l'investissement" },
  { id: 5, title: "Quelle est la différence entre rendement brut et rendement net ?", category: "Bases de l'investissement" },
  { id: 6, title: "Qu'est-ce qu'un cash-flow ?", category: "Bases de l'investissement" },
  { id: 7, title: "Qu'est-ce qu'un investissement immobilier ?", category: "Bases de l'investissement" },
  { id: 8, title: "Qu'est-ce qu'un plan de paiement ?", category: "Bases de l'investissement" },
  { id: 9, title: "Qu'est-ce qu'un bien off-plan ?", category: "Bases de l'investissement" },
  { id: 10, title: "Investir à Dubaï est-ce vraiment rentable ?", category: "Stratégie & Positionnement" },
  { id: 11, title: "Pourquoi privilégier les villas plutôt que les appartements ?", category: "Stratégie & Positionnement" },
  { id: 12, title: "Quels sont les meilleurs quartiers pour investir à Dubaï ?", category: "Stratégie & Positionnement" },
  { id: 13, title: "Qu'est-ce qu'une SPV et pourquoi en créer une ?", category: "Structuration & Cadre légal" },
  { id: 14, title: "Qu'est-ce que le DIFC ?", category: "Structuration & Cadre légal" },
  { id: 15, title: "Qu'est-ce qu'un escrow account ?", category: "Structuration & Cadre légal" },
  { id: 16, title: "Qu'est-ce qu'un Oqood ?", category: "Structuration & Cadre légal" },
  { id: 17, title: "Est-ce sécurisé d'investir à Dubaï ?", category: "Sécurité & Risques" },
  { id: 18, title: "Que se passe-t-il si le promoteur fait faillite ?", category: "Sécurité & Risques" },
  { id: 19, title: "Peut-on perdre son argent en investissant à Dubaï ?", category: "Sécurité & Risques" },
  { id: 20, title: "Comment mon capital est-il protégé ?", category: "Sécurité & Risques" },
  { id: 21, title: "Qu'est-ce que le crowdfunding immobilier ?", category: "Crowdfunding immobilier" },
  { id: 22, title: "Comment fonctionne le crowdfunding à Dubaï ?", category: "Crowdfunding immobilier" },
  { id: 23, title: "Combien faut-il investir minimum ?", category: "Crowdfunding immobilier" },
  { id: 24, title: "Est-ce sécurisé le crowdfunding immobilier ?", category: "Crowdfunding immobilier" },
];

// Images locales disponibles par type
const LOCAL_IMAGES = {
  flip: ['flip-1.jpg', 'flip-9.jpg', 'flip-12.jpg', 'flip-13.jpg', 'flip-25.jpg', 'flip-26.jpg', 'flip-27.jpg', 'flip-28.jpg', 'flip-29.jpg', 'flip-30.jpg', 'flip-31.jpg', 'flip-32.jpg', 'flip-36.jpg'],
  villa: ['0A6A5723.jpg', '0A6A5728.jpg', '0A6A5754.jpg', '0A6A5756.jpg', '0A6A5758.jpg', '0A6A6039.jpg'],
  interior: ['0K8A7227.jpg', '0K8A7233.jpg', '0K8A7239.jpg', '0K8A7245.jpg', '0K8A7248.jpg', '0K8A7257.jpg', '0K8A7267.jpg'],
  misc: ['IMG_1116.jpg', 'IMG_1358.jpg', 'IMG_1369.jpg', 'IMG_2218.JPG', 'IMG_2230.JPG', 'IMG_2443.JPG']
};

// Mapping article -> type d'image préféré
function getImageTypeForArticle(article) {
  const title = article.title.toLowerCase();
  
  if (title.includes('flip') || title.includes('rénovation')) return 'flip';
  if (title.includes('villa') || title.includes('appartement')) return 'villa';
  if (title.includes('intérieur') || title.includes('luxe')) return 'interior';
  if (title.includes('dubaï') || title.includes('quartier')) return 'villa';
  
  // Par défaut selon la catégorie
  if (article.category === "Bases de l'investissement") return 'flip';
  if (article.category === "Stratégie & Positionnement") return 'villa';
  if (article.category === "Structuration & Cadre légal") return 'interior';
  if (article.category === "Sécurité & Risques") return 'villa';
  if (article.category === "Crowdfunding immobilier") return 'flip';
  
  return 'villa';
}

// Trouver le chemin complet d'une image
function findImagePath(imageName) {
  for (const folder of IMAGE_FOLDERS) {
    const fullPath = path.join(folder, imageName);
    if (fs.existsSync(fullPath)) return fullPath;
  }
  return null;
}

// Générer le prompt pour Gemini
function generatePrompt(article) {
  return `Ultra-realistic luxury real estate photography in Dubai. 
Premium ${article.category.includes('villa') ? 'villa exterior with pool' : 'modern architecture'}, 
golden hour cinematic lighting, 8K resolution.
NO humans, NO people, NO faces.
NO futuristic elements, NO holograms, NO sci-fi.
Clean, premium, professional real estate photography style.
Dubai skyline or luxury property.`;
}

// Générer une image avec Gemini
async function generateWithGemini(article, outputPath) {
  const prompt = generatePrompt(article);
  
  return new Promise((resolve) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: `Generate an image: ${prompt}` }] }],
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
                resolve(outputPath);
                return;
              }
            }
          }
          resolve(null);
        } catch (e) {
          console.error('Erreur Gemini:', e.message);
          resolve(null);
        }
      });
    });
    
    req.on('error', () => resolve(null));
    req.write(body);
    req.end();
  });
}

// Fonction principale
async function main() {
  console.log('\n🖼️  Générateur d\'images InvestDubai\n');
  console.log(`📁 Dossier de sortie: ${OUTPUT_FOLDER}\n`);
  
  // Créer le dossier de sortie
  if (!fs.existsSync(OUTPUT_FOLDER)) {
    fs.mkdirSync(OUTPUT_FOLDER, { recursive: true });
  }
  
  const usedImages = new Set();
  const results = [];
  
  for (const article of ARTICLES) {
    console.log(`\n[${article.id}] ${article.title.substring(0, 50)}...`);
    
    // Vérifier si l'image existe déjà
    const existingPath = path.join(OUTPUT_FOLDER, `article-${article.id}.jpg`);
    if (fs.existsSync(existingPath)) {
      console.log(`   ✅ Image existante: article-${article.id}.jpg`);
      results.push({ id: article.id, source: 'existing', path: existingPath });
      continue;
    }
    
    // Chercher une image locale
    const imageType = getImageTypeForArticle(article);
    const availableImages = LOCAL_IMAGES[imageType].filter(img => !usedImages.has(img));
    
    if (availableImages.length > 0) {
      const selectedImage = availableImages[0];
      const sourcePath = findImagePath(selectedImage);
      
      if (sourcePath) {
        // Copier l'image locale
        fs.copyFileSync(sourcePath, existingPath);
        usedImages.add(selectedImage);
        console.log(`   📁 Image locale copiée: ${selectedImage}`);
        results.push({ id: article.id, source: 'local', path: existingPath, original: selectedImage });
        continue;
      }
    }
    
    // Fallback: générer avec Gemini
    console.log(`   🎨 Génération avec Gemini...`);
    const generated = await generateWithGemini(article, existingPath);
    
    if (generated) {
      console.log(`   ✅ Image générée: article-${article.id}.jpg`);
      results.push({ id: article.id, source: 'gemini', path: existingPath });
    } else {
      // Fallback ultime: utiliser n'importe quelle image disponible
      const fallbackImage = [...LOCAL_IMAGES.villa, ...LOCAL_IMAGES.flip, ...LOCAL_IMAGES.interior]
        .find(img => !usedImages.has(img));
      
      if (fallbackImage) {
        const fallbackPath = findImagePath(fallbackImage);
        if (fallbackPath) {
          fs.copyFileSync(fallbackPath, existingPath);
          usedImages.add(fallbackImage);
          console.log(`   ⚠️ Fallback: ${fallbackImage}`);
          results.push({ id: article.id, source: 'fallback', path: existingPath, original: fallbackImage });
        }
      } else {
        console.log(`   ❌ Aucune image disponible`);
        results.push({ id: article.id, source: 'none', path: null });
      }
    }
  }
  
  // Résumé
  console.log('\n' + '='.repeat(50));
  console.log('📊 RÉSUMÉ');
  console.log('='.repeat(50));
  console.log(`Total: ${results.length}`);
  console.log(`Existantes: ${results.filter(r => r.source === 'existing').length}`);
  console.log(`Locales: ${results.filter(r => r.source === 'local').length}`);
  console.log(`Gemini: ${results.filter(r => r.source === 'gemini').length}`);
  console.log(`Fallback: ${results.filter(r => r.source === 'fallback').length}`);
  console.log(`Échecs: ${results.filter(r => r.source === 'none').length}`);
  
  // Sauvegarder le rapport
  fs.writeFileSync(
    path.join(OUTPUT_FOLDER, 'generation-report.json'),
    JSON.stringify(results, null, 2)
  );
  console.log(`\n📄 Rapport: ${OUTPUT_FOLDER}/generation-report.json`);
}

main().catch(console.error);
