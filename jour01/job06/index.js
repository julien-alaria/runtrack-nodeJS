const fs = require('node:fs');

data = fs.readFileSync('data.txt', 'utf8');
console.log(data);