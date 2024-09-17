import { readdir } from 'fs/promises';

async function getGuests(directoryPath) {
  try {
    const files = await readdir(directoryPath);
    
    const guestPromises = files.map(async (file) => {
      const [firstName, lastName] = file.split('_');
      return `${lastName.slice(0, -5)} ${firstName}`;
    });

    const guests = await Promise.all(guestPromises);
    
    return guests.sort((a, b) => a.localeCompare(b));
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}

async function printGuests(directoryPath) {
  const guests = await getGuests(directoryPath);
  
  guests.forEach((guest, index) => {
    console.log(`${index + 1}. ${guest}`);
  });
}

// Get the directory path from command line arguments
const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error('Please provide a directory.');
} else {
  printGuests(directoryPath);
}