#!/usr/bin/env node

import fs from 'fs/promises';

function undoDisco(word) {
    const midpoint = Math.floor(word.length / 2);
    return word.slice(midpoint) + word.slice(0, midpoint);
}

function processInput(input) {
    return input.split(' ').map(undoDisco).join(' ');
}

async function readAndDecipherFile(filename) {
    try {
        const content = await fs.readFile(filename, 'utf-8');
        const decipheredContent = processInput(content.trim());
        console.log(decipheredContent);
    } catch (error) {
        console.error('Error reading or processing the file:', error.message);
        process.exit(1);
    }
}

const filename = process.argv[2];

if (!filename) {
    console.error('Please provide a filename as an argument');
    process.exit(1);
}

readAndDecipherFile(filename);