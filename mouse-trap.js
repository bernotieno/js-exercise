let lastCircle = null;
const circleSize = 50; // Diameter of the circle
const boxBorder = 1; // Border width of the box

export function createCircle(e) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = `${e.clientX - circleSize / 2}px`;
  circle.style.top = `${e.clientY - circleSize / 2}px`;
  circle.style.background = 'white';
  document.body.appendChild(circle);
  lastCircle = circle;
}

export function moveCircle(e) {
  if (lastCircle) {
    const box = document.querySelector('.box');
    const boxRect = box.getBoundingClientRect();
    
    let newX = e.clientX - circleSize / 2;
    let newY = e.clientY - circleSize / 2;

    // Check if the circle is inside the box
    if (isInsideBox(lastCircle, boxRect)) {
      // Restrict movement within the box
      newX = Math.max(boxRect.left + boxBorder, Math.min(newX, boxRect.right - circleSize - boxBorder));
      newY = Math.max(boxRect.top + boxBorder, Math.min(newY, boxRect.bottom - circleSize - boxBorder));
      lastCircle.style.background = 'var(--purple)';
    } else {
      lastCircle.style.background = 'white';
    }

    lastCircle.style.left = `${newX}px`;
    lastCircle.style.top = `${newY}px`;
  }
}

export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  // The box size is set in CSS, so we don't need to set it here
  // Center the box
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