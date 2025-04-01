/**
 * @file Rutas para la gestión de usuarios en la API REST.
 * @description Define los endpoints CRUD para manejar usuarios en la base de datos MongoDB.
 * @requires express
 * @requires ../models/user
 */

const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

/**
 * @route POST /users
 * @description Crea un nuevo usuario en la base de datos.
 * @param {Object} req - Objeto de solicitud HTTP con los datos del usuario en el cuerpo.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} El usuario creado o un mensaje de error.
 */
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/**
 * @route GET /users
 * @description Obtiene todos los usuarios registrados en la base de datos.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP con la lista de usuarios.
 * @returns {Array} Lista de usuarios o un mensaje de error.
 */
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/**
 * @route GET /users/:id
 * @description Obtiene un usuario específico por su ID.
 * @param {Object} req - Objeto de solicitud HTTP con el ID en los parámetros.
 * @param {Object} res - Objeto de respuesta HTTP con los datos del usuario.
 * @returns {Object} Datos del usuario o un mensaje de error.
 */
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/**
 * @route PUT /users/:id
 * @description Actualiza un usuario existente en la base de datos.
 * @param {Object} req - Objeto de solicitud HTTP con el ID en los parámetros y los datos a actualizar en el cuerpo.
 * @param {Object} res - Objeto de respuesta HTTP con la información de la actualización.
 * @returns {Object} Datos actualizados o un mensaje de error.
 */
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, edad, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { nombre, apellido, edad, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/**
 * @route DELETE /users/:id
 * @description Elimina un usuario de la base de datos.
 * @param {Object} req - Objeto de solicitud HTTP con el ID del usuario en los parámetros.
 * @param {Object} res - Objeto de respuesta HTTP con la confirmación de la eliminación.
 * @returns {Object} Resultado de la operación o un mensaje de error.
 */
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
