import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const reactDefaultImportRegex = /^import\s+React\s+from\s+['"]react['"];?/gm;
  const reactNamedImportRegex = /^import\s+\{([^}]+)\}\s+from\s+['"]react['"];?/gm;

  const hasDefault = reactDefaultImportRegex.test(content);
  reactDefaultImportRegex.lastIndex = 0;
  
  const namedMatch = reactNamedImportRegex.exec(content);
  reactNamedImportRegex.lastIndex = 0;
  
  if (hasDefault && namedMatch) {
    // Both exist, merge them
    content = content.replace(reactDefaultImportRegex, '');
    content = content.replace(reactNamedImportRegex, `import React, { $1 } from 'react';`);
    // Clean up empty lines created
    content = content.replace(/^\s*[\r\n]/gm, '');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed (merged):', filePath);
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

scanDir('./src');
