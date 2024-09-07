function pick() {
    const body = document.body;
    const hslDiv = document.createElement('div');
    hslDiv.className = 'hsl';
    body.appendChild(hslDiv);

    const hueDiv = document.createElement('div');
    hueDiv.className = 'hue text';
    body.appendChild(hueDiv);

    const luminosityDiv = document.createElement('div');
    luminosityDiv.className = 'luminosity text';
    body.appendChild(luminosityDiv);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'fixed';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    body.appendChild(svg);

    const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.id = 'axisX';
    axisX.setAttribute('stroke', 'black');
    svg.appendChild(axisX);

    const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.id = 'axisY';
    axisY.setAttribute('stroke', 'black');
    svg.appendChild(axisY);

    function updateColor(event) {
        const x = event.clientX;
        const y = event.clientY;
        const width = window.innerWidth;
        const height = window.innerHeight;

        const hue = Math.round((x / width) * 360);
        const luminosity = Math.round((y / height) * 100);

        const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;

        body.style.background = hslValue;
        hslDiv.textContent = hslValue;
        hueDiv.textContent = `hue\n${hue}`;
        luminosityDiv.textContent = `luminosity\n${luminosity}`;

        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);
        axisX.setAttribute('y1', 0);
        axisX.setAttribute('y2', '100%');

        axisY.setAttribute('x1', 0);
        axisY.setAttribute('x2', '100%');
        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);
    }

    body.addEventListener('mousemove', updateColor);

    body.addEventListener('click', () => {
        const hslValue = hslDiv.textContent;
        navigator.clipboard.writeText(hslValue).then(() => {
            console.log('HSL value copied to clipboard');
        });
    });
}

export {pick}