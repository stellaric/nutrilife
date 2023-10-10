const express = require("express");
const authUser = require("../controller/authUser");
const userController=require("../controller/Users")
const router = express.Router();


/************ debut CRUND USER */
router.post("/register", authUser.register);
router.get("/me/:id",userController.getUser);
router.put("/User/:id", (req, res) => {
res.json({ message: "Voici les donées" });
});
router.delete("/User/:id", (req, res) => {
  res.json({ message: "Voici les donées" });
});
/************ FIN CRUND */

router.post("/login",authUser.login );


router.get("/Users", (req, res) => {
  res.json({ message: "Voici les donées" });
});


module.exports = router;
