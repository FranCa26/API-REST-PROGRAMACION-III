const mongoose = require("mongoose");

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

module.exports = mongoose.model('user',userSchema);