// connection a la bd
const dotenv = require('dotenv')
dotenv.config()
//1) impoter mongoose depuis mongoose
const mongoose=  require ("mongoose") 

//créer une fonction asynchrone main
async function main() {
    //utiliser la méthode connect de mongoose importé précendemment pout établir la connexion avec la bdd
    //en paramètre de la méthode connect on lui passe l'url de localhost si on est en 
    //local ou mettre l'url de mongodb atlas qui pointe vers notre bdd en ligne
    await mongoose.connect(`${process.env.URL_CONNEXION}`);
}
//appeler la méthode main definie ci-dessus avec un catch pour récuperer un message en cas d'erreur 
main()
.then(() =>console.log("on est connecté")) //si ça réussit
.catch(err => console.log(err)); //si ça echoue
