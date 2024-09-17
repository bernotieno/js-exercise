
import { writeFile } from 'fs/promises';

function veryDisco(word) {
    const midpoint = Math.ceil(word.length / 2);
    return word.slice(midpoint) + word.slice(0, midpoint);
}

function processInput(input) {
    return input.split(' ').map(veryDisco).join(' ');
}

async function writeToFile(content) {
    try {
        await writeFile('verydisco-forever.txt', content);
        console.log('Result written to verydisco-forever.txt');
    } catch (error) {
        console.error('Error writing to file:', error);
        process.exit(1);
    }
}

const input = process.argv[2];

if (!input) {
    console.error('Please provide an argument');
    process.exit(1);
}

const result = processInput(input);
writeToFile(result);