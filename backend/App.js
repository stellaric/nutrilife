const express = require("express");
const { connecter } = require("./bd/connect");
const app = express();
// création de point de terminaison et  de serveur  avec une fonction colback
app.get("/", (req, res) => {
  console.log("coucou");
});

//  On appel la fonction connecter de connect.js on lui donne url de mangodb recupérer
//   avec mongosh sur le terminal
//   pour ce connect a cette url

connecter("mongodb://127.0.0.1:2701"),
  (erreur) => {
    if (erreur){
      console.log("Erreur lors de la connexion avec la base de donée");
      process.exit(-1);
    } else {
      console.log("Connexion avec la base de donée établie");

      app.listen(3000, () => console.log("attente des requêtes au port 3000"));
    }
    
  };
