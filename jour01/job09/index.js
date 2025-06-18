const fs = require('fs');

fs.writeFile('data.txt', 'Ceci est un nouveau texte', (err) => {
    if (err) {
        console.error("Erreur lors de l'écriture du fichier", err);
        return;
    }
    console.log("Fichier modifié avec succès");

    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier");
            return;
        }
        console.log("Contenu modifié du fichier :", data);
    });
});
