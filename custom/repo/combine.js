const fs = require('fs');
const path = require('path');

const basePath = 'd:/Greenbull Dropbox/Marketing/PRODUCTION/Investdubai/investdubailandingpages-master-V2/src';
const destDir = 'd:/Greenbull Dropbox/Marketing/PRODUCTION/Investdubai/investdubailandingpages-master-V2/custom';

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir);
}

const files = [
  { path: 'pages/theopportunity/Page.tsx', name: 'Page' },
  { path: 'pages/theopportunity/components/Navbar.tsx', name: 'Navbar' },
  { path: 'pages/theopportunity/components/Hero.tsx', name: 'Hero' },
  { path: 'pages/theopportunity/components/Opportunity.tsx', name: 'Opportunity' },
  { path: 'components/TrackRecordCarousel.tsx', name: 'TrackRecordCarousel' },
  { path: 'pages/theopportunity/components/WhyGapExists.tsx', name: 'WhyGapExists' },
  { path: 'pages/theopportunity/components/TakeAction.tsx', name: 'TakeAction' },
  { path: 'pages/theopportunity/components/HowItWorks.tsx', name: 'HowItWorks' },
  { path: 'pages/theopportunity/components/WhyInvestDubai.tsx', name: 'WhyInvestDubai' },
  { path: 'pages/theopportunity/components/FAQ.tsx', name: 'FAQ' },
  { path: 'pages/theopportunity/components/FinalCTA.tsx', name: 'FinalCTA' },
  { path: 'pages/theopportunity/components/Footer.tsx', name: 'Footer' },
  { path: 'pages/theopportunity/config.ts', name: 'config' }
];

let allImports = new Set();
let allContent = '';

for (const file of files) {
  let content = fs.readFileSync(path.join(basePath, file.path), 'utf8');
  
  // Remove local component imports
  content = content.replace(/import \{.*?\} from '\.\/.*?';\n/g, '');
  content = content.replace(/import \{.*?\} from '\.\.\/.*?';\n/g, '');
  content = content.replace(/import \{.*?\} from '\.\.\/\.\.\/.*?';\n/g, '');
  content = content.replace(/import \{ homepageContent \} from '.*?config';\n/g, '');
  content = content.replace(/import \{ TrackRecordCarousel \} from '.*?TrackRecordCarousel';\n/g, '');
  
  // Extract external imports
  const importRegex = /^import .+ from ['"][^'"]+['"];/gm;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
      if (!match[0].includes('./') && !match[0].includes('../')) {
         allImports.add(match[0]);
      }
  }
  
  // Remove all imports
  content = content.replace(/^import .+ from .+;\n/gm, '');
  
  allContent += '\n// ==========================================\n';
  allContent += '// FILE: src/' + file.path + '\n';
  allContent += '// ==========================================\n\n';
  
  if (file.name === 'config') {
      content = content.replace(/export const homepageContent =/g, 'const homepageContent =');
  }
  
  // Prevent duplicate export default if combining them all
  if (file.name !== 'Page') {
      content = content.replace(/export default function/g, 'function');
      content = content.replace(/export const/g, 'const');
  }
  
  allContent += content;
}

let finalOutput = Array.from(allImports).join('\n') + '\n\n';
finalOutput += `import { trackRecordData } from '../src/content/trackRecordData';\n`;
finalOutput += `import { numbersDictionary } from '../src/content/numbersDictionary';\n\n`;

finalOutput += allContent;

fs.writeFileSync(path.join(destDir, 'OpportunityFullPage_Combined.tsx'), finalOutput);
console.log('Successfully combined into custom/OpportunityFullPage_Combined.tsx');
