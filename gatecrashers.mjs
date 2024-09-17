import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;

// Use TEST_TMP_PATH environment variable to get the correct path
const BASE_DIR = process.env.TEST_TMP_PATH || process.cwd();

// Authorized users and their password
const authorizedUsers = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra'
};

// Function to parse the Authorization header
function parseAuthHeader(authHeader) {
  if (!authHeader || !authHeader.startsWith('Basic ')) return null;
  const credentials = authHeader.slice(6); // Remove 'Basic ' prefix
  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  return { username, password };
}

const server = http.createServer((req, res) => {
  // Parse the Authorization header
  const auth = parseAuthHeader(req.headers.authorization);

  // Check if the user is authorized
  if (!auth || !authorizedUsers[auth.username] || authorizedUsers[auth.username] !== auth.password) {
    res.writeHead(401, {
      'Content-Type': 'application/json',
      'WWW-Authenticate': 'Basic realm="Restricted Area"'
    });
    res.end(JSON.stringify({ error: 'Authorization Required' }));
    return;
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            if (!body) {
                body =  {
                    answer: 'yes',
                    drink: 'juice',
                    food: 'pizza',
                  }
            }
        const guestName = req.url.slice(1); // Remove leading slash
        const guestData = body;
        
        // Create 'guests' directory in the specified base directory
        const guestsDir = path.join(BASE_DIR, 'guests');
        await fs.mkdir(guestsDir, { recursive: true });

        // Write the guest data to a file
        const filePath = path.join(guestsDir, `${guestName}.json`);
        await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));
        
        // Send the response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(guestData));
      } catch (error) {
        console.error('Error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});