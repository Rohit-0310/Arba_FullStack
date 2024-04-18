const express = require("express");

const User = require("../models/user.model")

const crudController = require("./crud.controller")

const router = express.Router(); 

router.post ("", crudController.post(User)) //User
router.get("", crudController.get(User))
router.patch("/:id", crudController.updateOne(User))
router.delete("/:id", crudController.DeleteOne(User))
router.get("/:id", crudController.getOne(User))


module.exports = router;