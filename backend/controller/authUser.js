const model = require("../models/usersModel");
const jwt = require("jsonwebtoken");
// creation du token
const maxAge = 3 * 24 * 60 * 60 * 1000; // durée de vie du token
const createToken = (id) => {
  return jwt.sign(
    { id },
    // token definit dans.env
    process.env.TOKEN,
    {
      expiresIn: maxAge,
    }
  );
};
// enregistrer un utilisateur
module.exports.register = async (req, res) => {
  // on recupe la requette
  const { civility, firstName, lastName, email, password } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (!civility || !firstName || !lastName || !email || !password) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }
  console.log("register");
  // envois a la bdd ce que la personne a saisit
  try {
    const user = await model.create({
      civility,
      firstName,
      lastName,
      email,
      password,
    });
    res.status(201).json({
      message: "l'enregistrement s'est bien pasé ",
    });
  } catch (error) {
    console.log(error);
  }
};
// fin enregistrer un utilisateur

// authentification

module.exports.login = async (req, res) => {
  // on recupere la requette saisit par l'utilisateur
  const { email, password } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (!email || !password) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }
  // envois a la bdd ce que la personne a saisit
  try {
    const login = await model.login(email, password);
    console.log(login);
    const token = createToken(login._id);
    res.status(201).json({
      message: "l'enregistrement s'est bien pasé ",
      login,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
// fin authentification
