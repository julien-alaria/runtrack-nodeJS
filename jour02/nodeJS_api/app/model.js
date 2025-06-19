const { readFileSync, writeFileSync } = require('fs');




//1 ere façon

// console.log(jsonToObject);
// console.log("ID :", jsonToObject.tasks[0].id);
// console.log("Titre :", jsonToObject.tasks[0].title);
// console.log("Description :", jsonToObject.tasks[0].description);


// 2 eme façon avec verification

// if (jsonToObject.tasks && jsonToObject.tasks.length > 0) {
//     console.log("ID :", jsonToObject.tasks[0].id);
//     console.log("Titre :", jsonToObject.tasks[0].title);
//     console.log("Description :", jsonToObject.tasks[0].description);
// } else {
//     console.log("Aucune tâche trouvée");
// }


//Creation et edition de fichier JSON

// const myData = {
//     name: "julien",
//     age: 27,
//     legal: true
// }

// const myDataStr = JSON.stringify(myData);
// console.log(myDataStr);

// writeFileSync('./data/fakeData.json', myDataStr);

function getAllTasks(req, res) {
    const data = JSON.parse(readFileSync('./data/data.json', 'utf-8'));

    if (data.tasks && data.tasks.length > 0 ) {
        data.taks.forEach((task, index) => {
            console.log(`Tâche ${index + 1}`);
            console.log(" ID :", task.id);
            console.log(" Titre :", task.title);
            console.log( " Description :", task.description);
            console.log("----------------------");
        });
    } else {
        console.log("Aucune tâche trouvée");
    }
};