//CONEXION AL PUERTO A TRAVES DE EXPRESS
const express = require("express");
const mongoose = require("mongoose");
const userRutas = require("./router/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRutas);

app.get("/", (req, res) => {
  res.send("Bienvenido a primera api rest");
});

app.listen(port, () => console.log("servidor listo", port));



require("dotenv").config();

 mongoose
   .connect(process.env.mongoClave)
   .then(() => console.log("CONECTADO A MONGO DB ATLAS"))
   .catch((error) => console.error(error));




