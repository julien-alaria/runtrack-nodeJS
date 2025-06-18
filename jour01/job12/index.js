const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    //Vérifie que la requête est pour la page d'accueil
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');

        //Lire le fichier HTML
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erreur serveur');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        //Pour tout autre route : 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page non trouvée');
    }
});

server.listen(8080, () => {
    console.log("Serveur en écoute sur le port 8080");
});
