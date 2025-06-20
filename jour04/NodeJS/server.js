const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/LaPlateforme")
.then(()=> console.log("Connexion réussie"))
.catch(err => console.error("Erreur de connexion", err));

module.exports = mongoose;