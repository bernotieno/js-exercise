export const generateLetters = () => {
    const container = document.getElementById('chart') || document.body;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const totalLetters = 120;
  
    for (let i = 0; i < totalLetters; i++) {
      const letter = document.createElement('div');
      
      // Random letter selection
      letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
      
      // Font size calculation (from 11px to 130px)
      const fontSize = Math.floor(11 + (119 * i / (totalLetters - 1)));
      letter.style.fontSize = `${fontSize}px`;
      
      // Font weight calculation
      if (i < totalLetters / 3) {
        letter.style.fontWeight = '300';
      } else if (i < (2 * totalLetters) / 3) {
        letter.style.fontWeight = '400';
      } else {
        letter.style.fontWeight = '600';
      }
      
      // Additional styling for better visibility
      letter.style.display = 'inline-block';
      letter.style.margin = '5px';
      letter.style.textAlign = 'center';
      
      container.appendChild(letter);
    }
  };