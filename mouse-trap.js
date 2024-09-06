const circleSize = 50; // Circle diameter
const circleRadius = circleSize / 2;
let activeCircle = null; // Track the currently dragged circle
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Create a new circle at the mouse click position
export function createCircle(e) {
  if (isDragging) return; // Prevent creating another circle during dragging

  const circle = document.createElement('div');
  circle.className = 'circle'; // Use the circle CSS
  circle.style.left = `${e.clientX - circleRadius}px`;
  circle.style.top = `${e.clientY - circleRadius}px`;
  circle.style.background = 'white';

  document.body.appendChild(circle);

  // Add mouse events to make the circle draggable
  circle.addEventListener('mousedown', (ev) => {
    activeCircle = circle;
    offsetX = ev.clientX - circle.getBoundingClientRect().left;
    offsetY = ev.clientY - circle.getBoundingClientRect().top;
    isDragging = true;
  });
}

// Move the circle with the mouse
export function moveCircle(e) {
  const box = document.querySelector('.box');
  const boxRect = box.getBoundingClientRect();

  if (activeCircle) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Restrict the circle within the box once it enters
    if (isInsideBox(activeCircle, boxRect)) {
      activeCircle.style.background = 'var(--purple)'; // Change color to purple
      // Prevent moving the circle outside the box
      newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - circleSize - 1));
      newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - circleSize - 1));
    }

    // Move the circle with the mouse (or restrict inside the box)
    activeCircle.style.left = `${newX}px`;
    activeCircle.style.top = `${newY}px`;
  }
}

// Stop dragging when the mouse is released
export function stopDragging() {
  activeCircle = null;
  isDragging = false;
}

// Create the box in the center of the page
export function setBox() {
  const box = document.createElement('div');
  box.className = 'box'; // Use the box CSS
  box.style.position = 'absolute';
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(box);
}

// Check if the circle is fully inside the box
function isInsideBox(circle, boxRect) {
  const circleRect = circle.getBoundingClientRect();
  return (
    circleRect.left >= boxRect.left + 1 &&
    circleRect.right <= boxRect.right - 1 &&
    circleRect.top >= boxRect.top + 1 &&
    circleRect.bottom <= boxRect.bottom - 1
  );
}

// Event listeners for creating and moving circles
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
document.addEventListener('mouseup', stopDragging);

// Initialize the box on page load
setBox();
