const fs = require('fs').promises;

async function showDirectory() {
    try {
        const directory = await fs.readdir('..');
        console.log("Noms dans le répertoire courant :", directory);
    } catch (err) {
        console.error("Erreur lors de la lecture du répertoire :", err);
    }
}

showDirectory();