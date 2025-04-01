/**
 * @file Servidor Express con conexión a MongoDB Atlas.
 * @description Configuración del servidor utilizando Express y conexión a la base de datos con Mongoose.
 * @requires express
 * @requires mongoose
 * @requires dotenv
 * @requires ./router/user
 */

const express = require("express");
const mongoose = require("mongoose");
const userRutas = require("./router/user");
require("dotenv").config(); // Carga las variables de entorno

const app = express();
const port = process.env.PORT || 3000;

/**
 * Middleware para permitir el uso de JSON en las solicitudes.
 */
app.use(express.json());

/**
 * Rutas de la API.
 * Todas las rutas definidas en `userRutas` estarán bajo el prefijo `/api`.
 */
app.use("/api", userRutas);

/**
 * Ruta de prueba en la raíz del servidor.
 * @name GET /
 * @function
 * @memberof module:server
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {string} Mensaje de bienvenida.
 */
app.get("/", (req, res) => {
  res.send("Bienvenido a primera API REST");
});

/**
 * Inicia el servidor en el puerto especificado.
 */
app.listen(port, () => console.log("Servidor listo en el puerto", port));

/**
 * Conexión a la base de datos MongoDB Atlas utilizando Mongoose.
 * La clave de conexión se obtiene de las variables de entorno (`.env`).
 */
mongoose
  .connect(process.env.mongoClave)
  .then(() => console.log("CONECTADO A MONGO DB ATLAS"))
  .catch((error) => console.error("Error al conectar con MongoDB:", error));
