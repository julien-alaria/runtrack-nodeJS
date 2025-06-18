const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`Requête reçue pour : ${req.url}`);

    let filePath;

    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page non trouvée');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur serveur');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(3000, ()=> {
    console.log("Serveur en écoute sur http://localhost:3000");
});