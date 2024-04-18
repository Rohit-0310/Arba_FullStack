const express = require("express");

const Category = require("../models/category.model")

const crudController = require("./crud.controller")

const router = express.Router();


router.post ("", crudController.post(Category))
router.get("", crudController.get(Category))
router.patch("/:id", crudController.updateOne(Category))
router.delete("/:id", crudController.DeleteOne(Category))
router.get("/:id", crudController.getOne(Category))


module.exports = router;