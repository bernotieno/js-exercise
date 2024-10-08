import fs from 'fs/promises';
import http from 'http';
import path from 'path';

const port = 5000
const guest_dir = 'guests'
const server = http.createServer(async (req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                let guest_name = req.url.slice(1);
                const filepath = path.join(guest_dir, `${guest_name}.json`);

                await fs.writeFile(filepath, body);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(body);
            } catch (e) {
                console.log(e);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});