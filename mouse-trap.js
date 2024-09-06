const circleSize = 50;
const circleRadius = circleSize / 2;
let activeCircle = null;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Function to create a circle at the mouse click position
export function createCircle(e) {
  if (isDragging) return;

  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = `${e.clientX - circleRadius}px`;
  circle.style.top = `${e.clientY - circleRadius}px`;
  circle.style.background = 'white';

  document.body.appendChild(circle);

  circle.addEventListener('mousedown', (ev) => {
    activeCircle = circle;
    offsetX = ev.clientX - circle.getBoundingClientRect().left;
    offsetY = ev.clientY - circle.getBoundingClientRect().top;
    isDragging = true;
  });
}

// Function to move the last created circle with the mouse
export function moveCircle(e) {
  const box = document.querySelector('.box');
  const boxRect = box.getBoundingClientRect();

  if (activeCircle) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Restrict movement if the circle is inside the box
    if (isInsideBox(activeCircle, boxRect)) {
      activeCircle.style.background = 'var(--purple)';

      newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - circleSize - 1));
      newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - circleSize - 1));
    }

    activeCircle.style.left = `${newX}px`;
    activeCircle.style.top = `${newY}px`;
  }
}

// Function to stop dragging the circle
export function stopDragging() {
  activeCircle = null;
  isDragging = false;
}

// Function to create the box in the center of the page
export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  box.style.position = 'absolute';
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(box);
}

// Helper function to check if the circle is inside the box
function isInsideBox(circle, boxRect) {
  const circleRect = circle.getBoundingClientRect();
  return (
    circleRect.left >= boxRect.left + 1 &&
    circleRect.right <= boxRect.right - 1 &&
    circleRect.top >= boxRect.top + 1 &&
    circleRect.bottom <= boxRect.bottom - 1
  );
}

// Event listeners for mouse events
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
document.addEventListener('mouseup', stopDragging);
