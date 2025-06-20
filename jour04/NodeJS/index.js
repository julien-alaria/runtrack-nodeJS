const mongoose = require('./server');

//Schémas et modèles
const yearSchema = new mongoose.Schema({ name: String });
const Year = mongoose.model('Year', yearSchema);

const studentSchema = new mongoose.Schema({
    id: Number,
    firstname: String,
    lastname: String,
    year: { type: mongoose.Schema.Types.ObjectId, ref: 'Year' },
});

const Student = mongoose.model('Student', studentSchema);

async function clearCollections() {
    await Year.deleteMany({});
    await Student.deleteMany({});
}

async function insertYears() {
    const yearsData = [
        { name: 'Bachelor 1' },
        { name: 'Bachelor 2' },
        { name: 'Bachelor 3' },
    ];

    const years = await Year.insertMany(yearsData);

    const yearMap = {};
    years.forEach(y => {
        yearMap[y.name] = y._id;
    });
    return yearMap;
}

async function insertStudents(yearMap) {
    const studentsData = [
        {id: 1, firstname: 'Bob', lastname: 'LeBricoleur', year: yearMap[ 'Bachelor 1'] },
        {id: 2, firstname: 'John', lastname: 'Doe', year: yearMap[ 'Bachelor 2'] },
        {id: 3, firstname: 'Marine', lastname: 'Dupont', year: yearMap[ 'Bachelor 3'] },
    ];
    await Student.insertMany(studentsData);
}

async function displayStudents() {
    const students = await Student.find().populate('year');
    console.log('Etudiants avec leur cursus :');
    students.forEach(s => {
        console.log(`${s.firstname} ${s.lastname} - ${s.year.name}`);
    });
}

async function main() {
    await clearCollections();
    const yearMap = await insertYears();
    await insertStudents(yearMap);
    console.log('Etudiants ajoutés avec succès');
    await displayStudents();
    mongoose.connection.close();
}

main().catch(console.error);

