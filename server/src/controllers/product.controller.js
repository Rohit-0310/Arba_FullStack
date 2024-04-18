const express = require("express");

const Product = require("../models/product.model")

const crudController = require("./crud.controller")

const router = express.Router();


router.post ("", crudController.post(Product))
router.get("", crudController.get(Product))
router.patch("/:id", crudController.updateOne(Product))
router.delete("/:id", crudController.DeleteOne(Product))
router.get("/:id", crudController.getOne(Product))


module.exports = router;