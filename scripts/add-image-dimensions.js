import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all Vue files
async function processVueFiles() {
  try {
    const files = await glob('src/**/*.vue', { cwd: path.resolve(__dirname, '..') });
    
    for (const file of files) {
      const filePath = path.resolve(__dirname, '..', file);
      const content = await fs.promises.readFile(filePath, 'utf8');
      
      // Look for img tags without width and height
      const newContent = content.replace(
        /<img([^>]*)(?!\swidth=|\sheight=)([^>]*)>/g,
        (match, beforeAttrs, afterAttrs) => {
          // Check if there's a src attribute
          const srcMatch = match.match(/src=["']([^"']+)["']/);
          if (!srcMatch) return match;
          
          // Add default width and height if not present
          return `<img${beforeAttrs} width="auto" height="auto" loading="lazy"${afterAttrs}>`;
        }
      );
      
      // Look for AvatarImage components without width and height
      const finalContent = newContent.replace(
        /<AvatarImage([^>]*)(?!\swidth=|\sheight=)([^>]*)>/g,
        (match, beforeAttrs, afterAttrs) => {
          return `<AvatarImage${beforeAttrs} width="40" height="40" loading="lazy"${afterAttrs}>`;
        }
      );
      
      if (content !== finalContent) {
        await fs.promises.writeFile(filePath, finalContent, 'utf8');
        console.log(`Updated image attributes in ${file}`);
      }
    }
    
    console.log('All Vue files processed successfully');
  } catch (error) {
    console.error('Error processing Vue files:', error);
  }
}

processVueFiles();
