const express = require("express");
const userRoutes = require("./router/UserRoute");
const dbb = require("./bd/connect");
// on permet au front et au back de communiquer enssemble
const cors = require("cors");
const app = express();
// c
const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  preflightContinue: false,
  allowedHeaders: ["Content-Type"],
};
const port = process.env.PORT || 5002;

app.use(cors(corsOptions));

// on permer au server d'accpter les fichiers json
app.use(express.json());
// code url
app.use(express.urlencoded({ extended: false }));
// use associe une route de base a un emsemble de route
app.use("/api/user", userRoutes);
app.use(cors());
// pour lancer le server
app.listen(port, () => console.log("le server a démaré au port " + port));
