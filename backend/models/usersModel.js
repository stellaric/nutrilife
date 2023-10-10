// dans modèle en général  les données qu'on va mettre dans la base de donnée.
//crétion de la table de la BDD

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 6,
    trim: true,
  },
});
// pour scripter le mot de passe
UserSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

// pour decripter le mot de passe et commparer saissit utilisateur et celui de la bdd
  UserSchema.statics.login = async function (email,password){
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password,user.password)

        if(auth){
            return user;
        }
        throw Error ('mot de passe incorrect')
    }
    throw Error('Email incorrect')
}
//on export le model  pour l'utilisé ou on voudra juste avec userModel
const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
