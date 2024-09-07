// Global variables
let lastCircle = null;
const circleRadius = 25;

// Function to create a circle
function createCircle(event) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${event.clientX - circleRadius}px`;
    circle.style.top = `${event.clientY - circleRadius}px`;
    circle.style.background = 'white';
    document.body.appendChild(circle);
    lastCircle = circle;
}

// Function to move the circle
function moveCircle(event) {
    if (lastCircle) {
        const box = document.querySelector('.box').getBoundingClientRect();
        let x = event.clientX - circleRadius;
        let y = event.clientY - circleRadius;

        // Check if the circle is inside the box
        if (isInsideBox(x, y, box)) {
            lastCircle.style.background = 'var(--purple)';
            
            // Ensure the circle stays within the box boundaries
            x = Math.max(box.left + 1, Math.min(x, box.right - 2 * circleRadius - 1));
            y = Math.max(box.top + 1, Math.min(y, box.bottom - 2 * circleRadius - 1));
        } else if (lastCircle.style.background === 'var(--purple)') {
            // If the circle was purple (trapped), keep it at the edge of the box
            if (event.clientX < box.left + circleRadius) x = box.left + 1;
            if (event.clientX > box.right - circleRadius) x = box.right - 2 * circleRadius - 1;
            if (event.clientY < box.top + circleRadius) y = box.top + 1;
            if (event.clientY > box.bottom - circleRadius) y = box.bottom - 2 * circleRadius - 1;
        } else {
            lastCircle.style.background = 'white';
        }

        lastCircle.style.left = `${x}px`;
        lastCircle.style.top = `${y}px`;
    }
}

// Function to check if a point is inside the box
function isInsideBox(x, y, box) {
    return x > box.left && 
           x + 2 * circleRadius < box.right && 
           y > box.top && 
           y + 2 * circleRadius < box.bottom;
}

// Function to set up the box
function setBox() {
    const box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
}

// Event listeners
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);

export{setBox,createCircle,moveCircle}