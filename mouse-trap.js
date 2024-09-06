const circleSize = 50; // Diameter of the circle
const circleRadius = circleSize / 2;
const boxBorder = 1; // Border width of the box
let activeCircle = null; // Track the currently dragged circle
let offsetX = 0;
let offsetY = 0;
let isDragging = false; // Track whether a circle is being dragged

export function createCircle(e) {
  if (isDragging) return; // Don't create a new circle if dragging

  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.width = `${circleSize}px`;
  circle.style.height = `${circleSize}px`;
  circle.style.position = 'absolute';
  circle.style.borderRadius = '50%';
  circle.style.background = 'white';
  circle.style.left = `${e.clientX - circleRadius}px`;
  circle.style.top = `${e.clientY - circleRadius}px`;
  
  document.body.appendChild(circle);

  // Add mouse events to each new circle for dragging
  circle.addEventListener('mousedown', (ev) => {
    activeCircle = circle;
    offsetX = ev.clientX - circle.getBoundingClientRect().left;
    offsetY = ev.clientY - circle.getBoundingClientRect().top;
    isDragging = true; // Start dragging
  });
}

// Handle mousemove to drag the circle
export function moveCircle(e) {
  const box = document.querySelector('.box');
  const boxRect = box.getBoundingClientRect();

  if (activeCircle) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    if (isInsideBox(activeCircle, boxRect)) {
      activeCircle.style.background = 'var(--purple)';
      // Restrict movement within the box
      newX = Math.max(boxRect.left + boxBorder, Math.min(newX, boxRect.right - circleSize - boxBorder));
      newY = Math.max(boxRect.top + boxBorder, Math.min(newY, boxRect.bottom - circleSize - boxBorder));
    }

    activeCircle.style.left = `${newX}px`;
    activeCircle.style.top = `${newY}px`;
  }
}

// Handle mouseup to stop dragging
export function stopDragging() {
  activeCircle = null;
  isDragging = false; // Stop dragging after mouse release
}

export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  box.style.position = 'absolute';
  box.style.width = '300px'; // Set the size of the box
  box.style.height = '300px';
  box.style.border = `${boxBorder}px solid black`;
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
document.addEventListener('mouseup', stopDragging);

// Initialize the box
setBox();
