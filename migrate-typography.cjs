const fs = require("fs");
const path = require("path");

const classesToReplace = {
  // Display 1
  "text-5xl md:text-7xl font-bold tracking-tight leading-\\[1\\.1\\]": "text-display-1",
  "text-4xl sm:text-5xl md:text-7xl font-bold text-zinc-900 mb-6 md:mb-8 tracking-tight leading-\\[1\\.15\\] md:leading-\\[1\\.1\\]": "text-display-1 text-zinc-900 mb-6 md:mb-8",
  "text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-\\[1\\.15\\] md:leading-\\[1\\.1\\]": "text-display-1",
  "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8": "text-display-1 mb-8",
  "text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-\\[1\\.1\\]": "text-display-1 text-white mb-6 md:mb-8",
  
  // Heading 2
  "text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight": "text-h2 text-white mb-6",
  "text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900": "text-h2 text-zinc-900 mb-6",
  "text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white": "text-h2 text-white mb-6",
  "text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight": "text-h2 text-zinc-900 mb-6",
  "text-3xl md:text-5xl font-bold tracking-tight mb-8 text-zinc-900": "text-h2 text-zinc-900 mb-8",
  "text-4xl md:text-5xl font-bold tracking-tight text-white mb-6": "text-h2 text-white mb-6",
  "text-3xl md:text-5xl font-bold tracking-tight text-white mb-6": "text-h2 text-white mb-6",
  
  // Heading 3
  "text-3xl font-bold text-zinc-900 text-center mb-12 tracking-tight": "text-h3 text-zinc-900 text-center mb-12",
  "text-2xl md:text-3xl font-bold text-zinc-900 mb-4 tracking-tight": "text-h3 text-zinc-900 mb-4",
  "text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight": "text-h3 text-white mb-4",
  "text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight": "text-h3 text-zinc-900 mb-6",
  "text-2xl font-bold text-zinc-900 tracking-tight": "text-h3 text-zinc-900",
  "text-2xl font-bold text-white tracking-tight": "text-h3 text-white",
  "text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900": "text-h3 text-zinc-900 mb-6",
  
  // Heading 4
  "text-xl font-bold text-white mb-6 flex items-center gap-3": "text-h4 text-white mb-6 flex items-center gap-3",
  "text-xl font-semibold mb-4 text-zinc-900 relative z-10 tracking-tight": "text-h4 text-zinc-900 mb-4 relative z-10",
  "text-xl font-bold text-zinc-900 mb-3": "text-h4 text-zinc-900 mb-3",
  "text-xl font-bold text-white mb-3": "text-h4 text-white mb-3",
  "text-xl font-semibold text-zinc-900 tracking-tight": "text-h4 text-zinc-900",
  
  // Body Large
  "text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 font-light": "text-body-lg text-zinc-600 max-w-3xl mx-auto mb-8 md:mb-10",
  "text-zinc-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light": "text-body-lg text-zinc-400 max-w-3xl mx-auto",
  "text-lg md:text-xl text-zinc-600 leading-relaxed font-light": "text-body-lg text-zinc-600",
  "text-lg text-zinc-400 leading-relaxed font-light": "text-body-lg text-zinc-400",
  "text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light": "text-body-lg text-zinc-300 mb-10 max-w-2xl mx-auto",
  "text-lg md:text-xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light": "text-body-lg text-zinc-600 mb-12 max-w-3xl mx-auto",
  
  // Body Small
  "text-zinc-600 leading-relaxed text-sm flex-grow relative z-10 font-light": "text-body-sm text-zinc-600 flex-grow relative z-10",
  "text-zinc-600 leading-relaxed text-sm font-light": "text-body-sm text-zinc-600",
  "text-zinc-400 leading-relaxed text-sm font-light": "text-body-sm text-zinc-400",
  
  // Labels
  "text-\\[10px\\] md:text-xs font-medium text-zinc-500 uppercase tracking-wider": "text-label text-zinc-500",
  "text-xs font-bold uppercase tracking-widest": "text-label",
  "text-zinc-500 text-\\[10px\\] uppercase tracking-wider block mb-1\\.5 font-medium": "text-label text-zinc-500 block mb-1.5",
  "text-emerald-400 text-xs font-bold uppercase tracking-widest": "text-label text-emerald-400",
  "text-\\[10px\\] font-medium uppercase tracking-wider": "text-label",
  "text-\\[10px\\] font-bold uppercase tracking-wider": "text-label",
  
  // Stats
  "text-xl md:text-2xl font-bold": "text-stat"
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  for (const [oldClassRegexStr, newClass] of Object.entries(classesToReplace)) {
    // Escape string for regex creation since the keys have regex-like strings
    const searchRegex = new RegExp(`(?<=className=["\'][^"\']*)(${oldClassRegexStr})(?=[^"\']*["\'])`, "g");
    if (searchRegex.test(content)) {
      content = content.replace(searchRegex, newClass);
      modified = true;
    }
  }

  // Handle direct string replacements that might not be matched by regex
  const directReplacements = [
    ['text-[10px] md:text-xs font-medium text-zinc-500 uppercase tracking-wider', 'text-label text-zinc-500'],
    ['text-[10px] uppercase tracking-wider block mb-1.5 font-medium text-zinc-500', 'text-label text-zinc-500 block mb-1.5'],
    ['text-4xl sm:text-5xl md:text-7xl font-bold text-zinc-900 mb-6 md:mb-8 tracking-tight leading-[1.15] md:leading-[1.1]', 'text-display-1 text-zinc-900 mb-6 md:mb-8'],
    ['text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 font-light', 'text-body-lg text-zinc-600 max-w-3xl mx-auto mb-8 md:mb-10'],
    ['text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight', 'text-h2 text-white mb-6'],
    ['text-xl font-bold text-white mb-6 flex items-center gap-3', 'text-h4 text-white mb-6 flex items-center gap-3'],
    ['text-zinc-600 leading-relaxed text-sm flex-grow relative z-10 font-light', 'text-body-sm text-zinc-600 flex-grow relative z-10'],
    ['text-xl font-bold text-zinc-900 mb-3', 'text-h4 text-zinc-900 mb-3'],
    ['text-zinc-600 leading-relaxed text-sm font-light', 'text-body-sm text-zinc-600']
  ];

  for (const [oldStr, newStr] of directReplacements) {
    if (content.includes(oldStr)) {
      content = content.split(oldStr).join(newStr);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts")) {
      processFile(fullPath);
    }
  }
}

walkDir("src");
console.log("Migration complete!");
