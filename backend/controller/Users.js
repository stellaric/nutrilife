const model = require("../models/usersModel");

//********** DEBUT recup d'un utilisateur ********
module.exports.getUser = async (req, res) => {
  // recupère l'id de la requette
  const { id } = req.params;
  console.log(id);
  // donne id a mongoose
  try {
    // recup l'id de la bdd
    const user = await model.findById(id);
    console.log(user);
    // reponse avec les infos de l'id
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
//********** FIN recup d'un utilisateur ********

//********** DEBUT modification d' un utilisateur ********
module.exports.putUser = async (req, res) => {
  // recupère l'id de la requette
  const { id } = req.params;
  console.log(id);
  // donne id a mongoose
  try {
    // trouve l'id de la personne a modifier et modifie tout ce qui a changé
    const user = await model.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    console.log(user);
    // reponse avec les infos de l'id
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
//********** FIN  modification d' un utilisateur ********ar;

//********** DEBUT suppression d'un utilisateur ********
module.exports.deleteUser = async (req, res) => {
  // recupère l'id de la requette de url
  const { id } = req.params;
  // donne id a mongoose
  try {
    //appel mon  model je lui passe l'id et suprime
    const user = await model.deleteOne({ _id: id }).exec();

    if (user.deletedCount > 0) {
      return res.status(201).json({
        message: "lutilisateur a été bien supprimé",
      });
    }
    // reponse avec les infos de l'id
  } catch (error) {
    console.log(error);
  }
};
//********** FIN   suppression  d' un utilisateur ********ar;

//********** DEBUT recup toud les  utilisateurs ********
module.exports.getUsers = async (req, res) => {
  try {
    // on cache le mot de pas avec la fonction
    const users = await model.find({});
    res.status(201).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};
//********** FIN recup toud les  utilisateurs  ********
