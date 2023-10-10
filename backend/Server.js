const express = require("express");
const port = process.env.PORT || 50002;
const userRoutes = require("./router/UserRoute");
const dbb = require("./bd/connect")

const app = express();
// on permer au server d'accpter les fichiers json
app.use(express.json())
// code url
app.use(express.urlencoded({extended:false}))
// use associe une route de base a un emsemble de route
app.use("/api/user",userRoutes);

// pour lancer le server
app.listen(port, () => console.log("le server a démaré au port " + port));

