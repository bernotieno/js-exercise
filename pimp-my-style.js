import { styles } from './pimp-my-style.data.js'

let currentIndex = 0;
let isRemoving = false;

export function pimp() {
  const button = document.querySelector('.button');
  
  if (isRemoving) {
    if (currentIndex > 0) {
      currentIndex--;
      button.classList.remove(styles[currentIndex]);
      if (currentIndex === 0) {
        button.classList.remove('unpimp');
        isRemoving = false;
      }
    }
  } else {
    if (currentIndex < styles.length) {
      button.classList.add(styles[currentIndex]);
      currentIndex++;
      if (currentIndex === styles.length) {
        button.classList.add('unpimp');
        isRemoving = true;
      }
    }
  }
}