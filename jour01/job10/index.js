let url = require('url');

const myURL = new URL('https://www.google.com/search?q=nodejs');

console.log("Protocole :", myURL.protocol);
console.log("Hote :", myURL.hostname);
console.log("Parametres de URL :", myURL.searchParams.get('q'));

myURL.hostname = 'www.laplateforme.io';
console.log("Nouvelle URL :", myURL.href);

myURL.searchParams.append('lang', 'fr');
console.log('Nouvelle URL après ajout de paramètres :', myURL.href);
