const circleSize = 50; // Diameter of the circle
const boxBorder = 1; // Border width of the box
let circles = [];

export function createCircle(e) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = `${e.clientX - circleSize / 2}px`;
  circle.style.top = `${e.clientY - circleSize / 2}px`;
  circle.style.background = 'white';
  document.body.appendChild(circle);
  circles.push(circle);
}

export function moveCircle(e) {
  const box = document.querySelector('.box');
  const boxRect = box.getBoundingClientRect();

  circles.forEach(circle => {
    if (isInsideBox(circle, boxRect)) {
      circle.style.background = 'var(--purple)';
    } else {
      circle.style.left = `${e.clientX - circleSize / 2}px`;
      circle.style.top = `${e.clientY - circleSize / 2}px`;
      circle.style.background = 'white';
    }
  });
}

export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  box.style.position = 'absolute';
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(box);
}

function isInsideBox(circle, boxRect) {
  const circleRect = circle.getBoundingClientRect();
  return (
    circleRect.left >= boxRect.left + boxBorder &&
    circleRect.right <= boxRect.right - boxBorder &&
    circleRect.top >= boxRect.top + boxBorder &&
    circleRect.bottom <= boxRect.bottom - boxBorder
  );
}

// Set up event listeners
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);

// Initialize the box
setBox();