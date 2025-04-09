const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob'));
const readFile = promisify(fs.readFile);

// Find all JS/TS/Vue files
async function analyzeUnusedImports() {
  try {
    const files = await glob('src/**/*.{js,ts,vue}', { cwd: path.resolve(__dirname, '..') });
    const importMap = new Map();
    const usageMap = new Map();
    
    // First pass: collect all imports
    for (const file of files) {
      const filePath = path.resolve(__dirname, '..', file);
      const content = await readFile(filePath, 'utf8');
      
      // Extract import statements
      const importRegex = /import\s+(?:{([^}]+)}|\*\s+as\s+([a-zA-Z0-9_$]+)|([a-zA-Z0-9_$]+))\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      
      while ((match = importRegex.exec(content)) !== null) {
        const namedImports = match[1] ? match[1].split(',').map(s => s.trim().split(' as ')[0].trim()) : [];
        const namespaceImport = match[2];
        const defaultImport = match[3];
        const importPath = match[4];
        
        if (!importMap.has(importPath)) {
          importMap.set(importPath, new Set());
        }
        
        if (namedImports.length > 0) {
          namedImports.forEach(name => importMap.get(importPath).add(name));
        }
        
        if (namespaceImport) {
          importMap.get(importPath).add(namespaceImport);
        }
        
        if (defaultImport) {
          importMap.get(importPath).add(defaultImport);
        }
      }
    }
    
    // Second pass: check usage of imports
    for (const file of files) {
      const filePath = path.resolve(__dirname, '..', file);
      const content = await readFile(filePath, 'utf8');
      
      for (const [importPath, imports] of importMap.entries()) {
        for (const importName of imports) {
          // Skip empty or whitespace-only import names
          if (!importName || /^\s*$/.test(importName)) continue;
          
          const key = `${importPath}:${importName}`;
          
          if (!usageMap.has(key)) {
            usageMap.set(key, 0);
          }
          
          // Count occurrences outside import statements
          const importStatements = content.match(/import\s+.+\s+from\s+.+/g) || [];
          const contentWithoutImports = content.split('\n')
            .filter(line => !importStatements.some(stmt => line.includes(stmt)))
            .join('\n');
          
          const regex = new RegExp(`\\b${importName}\\b`, 'g');
          const matches = contentWithoutImports.match(regex) || [];
          
          usageMap.set(key, usageMap.get(key) + matches.length);
        }
      }
    }
    
    // Report potentially unused imports
    console.log('Potentially unused imports:');
    let unusedCount = 0;
    
    for (const [key, count] of usageMap.entries()) {
      if (count === 0) {
        const [importPath, importName] = key.split(':');
        console.log(`- ${importName} from ${importPath}`);
        unusedCount++;
      }
    }
    
    console.log(`\nFound ${unusedCount} potentially unused imports.`);
    console.log('\nNote: This is a static analysis and may not catch dynamic usage. Review results before removing imports.');
    
  } catch (error) {
    console.error('Error analyzing imports:', error);
  }
}

analyzeUnusedImports();
