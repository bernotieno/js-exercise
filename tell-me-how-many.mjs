#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

async function countEntriesInDirectory(directoryPath) {
    try {
        const entries = await fs.readdir(directoryPath);
        console.log(`${entries.length}`);
    } catch (error) {
        console.error('Error reading directory:', error.message);
        process.exit(1);
    }
}

// Get the directory path from command line argument or use current directory
const directoryPath = process.argv[2] || '.';

// Resolve the path to an absolute path
const absolutePath = path.resolve(directoryPath);

countEntriesInDirectory(absolutePath);