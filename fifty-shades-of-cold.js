import { colors } from './fifty-shades-of-cold.data.js'

export function generateClasses() {
  const style = document.createElement('style');
  colors.forEach(color => {
    style.innerHTML += `.${color} { background: ${color}; }\n`;
  });
  document.head.appendChild(style);
}

export function generateColdShades() {
  const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
  const body = document.body;

  colors.forEach(color => {
    if (coldColors.some(coldColor => color.toLowerCase().includes(coldColor))) {
      const div = document.createElement('div');
      div.className = color;
      div.textContent = color;
      body.appendChild(div);
    }
  });
}

export function choseShade(shade) {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    div.className = shade;
  });
}