const express = require("express");
const authUser = require("../controller/authUser");
const userController = require("../controller/Users");
const router = express.Router();
const checkAuthMiddleWare = require("../middlewares/auth.middlewares");

/************ debut CRUND USER */
router.post("/register", authUser.register);
router.get("/me/:id", userController.getUser);
router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);
// , checkAuthMiddleWare.checkAuth

/************ FIN CRUND */

// se connecter
router.post("/login", authUser.login);
// recup tous les utilisateurs
router.get("/all", userController.getUsers);

module.exports = router;
