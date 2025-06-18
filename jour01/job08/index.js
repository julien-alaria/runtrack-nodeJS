const fs = require('fs');

fs.readFile('data.txt', 'utf8', (e, data) => {
    if (e) return console.error(e);
    console.log(data.replace(/(.)./g, '$1'));
});
