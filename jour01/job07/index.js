const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur de lecture du fichier', err);
        return;
    }
    console.log(data);
});