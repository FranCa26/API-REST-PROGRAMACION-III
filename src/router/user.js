
const express = require("express");
const userSchema = require('../models/user')
const router = express.Router();

router.post('/users',(req,res) =>{
   const user = userSchema(req.body);
   user
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error}));
})

router.get("/users", (req, res) => {
  userSchema
  
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/users/:id", (req, res) => {
   const { id } = req.params;
  userSchema

    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, edad, email } = req.body;
  userSchema

    .updateOne({ _id: id }, { $set: {nombre, apellido, edad, email} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema

    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
