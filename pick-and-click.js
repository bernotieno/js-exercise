export function pick() {
    const body = document.body;
    const hslDiv = document.querySelector('.hsl');
    const hueDiv = document.querySelector('.hue');
    const luminosityDiv = document.querySelector('.luminosity');
    const axisX = document.getElementById('axisX');
    const axisY = document.getElementById('axisY');

    function updateColor(event) {
        const x = event.clientX;
        const y = event.clientY;

        const hue = Math.round((x / window.innerWidth) * 360);
        const luminosity = Math.round((1 - y / window.innerHeight) * 100);
        const hsl = `hsl(${hue}, 50%, ${luminosity}%)`;

        // Update body background
        body.style.background = hsl;

        // Update display values
        hslDiv.textContent = hsl;
        hueDiv.textContent = `hue\n${hue}`;
        luminosityDiv.textContent = `luminosity\n${luminosity}`;

        // Update axis positions
        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);
        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);
    }

    function copyToClipboard() {
        const hslValue = hslDiv.textContent;
        navigator.clipboard.writeText(hslValue).then(() => {
            console.log('HSL value copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    // Event listeners
    body.addEventListener('mousemove', updateColor);
    body.addEventListener('click', copyToClipboard);
}

// Initialize the color picker
pick();