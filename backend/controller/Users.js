const model = require("../models/usersModel");

//********** DEBUT recup un utilisateur ********
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
//********** FIN recup un utilisateur ********
