const { MongoClient, Db } = require("mongodb");

// Connexion à la base de données avec le serveur Node.js et MongoDB
let client = null;

function connecter(url, callback) {
  // Si le client n'est pas connecté
  if (client == null) {
    client = new MongoClient(url);
    client.connect((erreur) => {
      if (erreur) {
        client = null;
        callback(erreur);
      } else {
        // Si le client est connecté
        callback();
      }
    });
  } else {
    // Si le client est déjà connecté
    callback();
  }
}
// connection bd 
function bd(){
    return new Db(client,"dbOK");
}
// fermer connection a bdd
function fermerConnection(){
if(client){
    client.close();
    client =null;
}
}
module.exports={ connecter, bd,fermerConnection}
