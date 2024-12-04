import sharp from 'sharp';
import copyContent from '../data/copy.json';

async function generateOGImage() {
  try {
    // Function to wrap text at a specific width
    function wrapText(text: string, maxChars: number): string[] {
      const words = text.split(' ');
      const lines: string[] = [];
      let currentLine = '';

      words.forEach(word => {
        if ((currentLine + word).length <= maxChars) {
          currentLine += (currentLine ? ' ' : '') + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      });
      lines.push(currentLine);
      return lines;
    }

    // Wrap the subtitle text
    const subtitleLines = wrapText(copyContent.bodyText, 60);

    const svgText = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <style>
          .header { fill: white; font-size: 32px; font-family: Arial, sans-serif; opacity: 0.9; }
          .title { fill: white; font-size: 72px; font-weight: bold; font-family: Arial, sans-serif; }
          .subtitle { fill: #CBD5E1; font-size: 28px; font-family: Arial, sans-serif; }
        </style>
        <rect width="1200" height="630" fill="rgba(0,0,0,0.6)"/>
        
        <!-- Header text -->
        <text x="600" y="160" text-anchor="middle" class="header">${copyContent.headerText}</text>
        
        <!-- Main title -->
        <text x="600" y="280" text-anchor="middle" class="title">${copyContent.heroText}</text>
        
        <!-- Subtitle (multiple lines) -->
        ${subtitleLines.map((line, i) => 
          `<text x="600" y="${380 + (i * 40)}" text-anchor="middle" class="subtitle">${line}</text>`
        ).join('')}
      </svg>
    `;

    // Load and process the background image
    const background = sharp('public/background.avif');
    
    // Resize and composite with text overlay
    await background
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .composite([
        {
          input: Buffer.from(svgText),
          top: 0,
          left: 0,
        },
      ])
      .toFormat('jpeg', { quality: 90 })
      .toFile('public/og-image.jpg');

    console.log('OG image generated successfully!');
  } catch (error) {
    console.error('Error generating OG image:', error);
  }
}

generateOGImage(); 