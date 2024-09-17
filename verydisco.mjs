
function veryDisco(word) {
    const midpoint = Math.ceil(word.length / 2);
    return word.slice(midpoint) + word.slice(0, midpoint);
}

function processInput(input) {
    return input.split(' ').map(veryDisco).join(' ');
}

const input = process.argv[2];

if (!input) {
    console.error('Please provide an argument');
    process.exit(1);
}

const result = processInput(input);
console.log(result);