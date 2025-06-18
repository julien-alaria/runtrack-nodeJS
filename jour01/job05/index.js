const path = require('node:path');

const fileName = path.basename(__filename);
console.log("Nom du fichier : ", fileName);

const fileExt = path.extname(__filename);
console.log("Extension du fichier :", fileExt);

const parentDirectory = path.basename(__dirname);
console.log("Nom du dossier parent : ", parentDirectory);

const parentFolder = path.dirname(__dirname);
console.log("Répertoire parent du fichier :", parentFolder);

const parseFile = path.parse(__filename);
console.log("Parse du fichier :", parseFile);



