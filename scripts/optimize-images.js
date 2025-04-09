import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing the images
const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public');

// Get all PNG files
const pngFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.png'));

// Process each PNG file
async function processImages() {
  for (const file of pngFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.png', '.webp'));
    
    console.log(`Converting ${file} to WebP...`);
    
    try {
      await sharp(inputPath)
        .resize({ width: 400 }) // Resize to reasonable dimensions
        .webp({ quality: 80 }) // Convert to WebP with good quality
        .toFile(outputPath);
      
      console.log(`Successfully converted ${file} to WebP`);
      
      // Get file sizes for comparison
      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
      
      console.log(`Reduced file size by ${savings}% (${(originalSize/1024).toFixed(2)}KB → ${(newSize/1024).toFixed(2)}KB)`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

processImages().catch(console.error);
