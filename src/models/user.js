/**
 * Modelo de usuario para MongoDB con Mongoose.
 * 
 * Define la estructura de los documentos de usuario en la base de datos.
 * Cada usuario tiene un nombre, apellido, edad, email y DNI.
 * 
 * @module models/User
 * @requires mongoose
 */

const mongoose = require("mongoose");

/**
 * Esquema del usuario en la base de datos.
 * 
 * @typedef {Object} UserSchema
 * @property {string} nombre - Nombre del usuario (requerido).
 * @property {string} apellido - Apellido del usuario (requerido).
 * @property {number} edad - Edad del usuario (requerido).
 * @property {string} email - Correo electrónico del usuario (requerido).
 * @property {number} dni - Documento Nacional de Identidad del usuario (requerido).
 */
const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
  },
});

/**
 * Modelo de usuario basado en el esquema definido.
 * 
 * @constant {mongoose.Model<UserSchema>}
 */
module.exports = mongoose.model("user", userSchema);
