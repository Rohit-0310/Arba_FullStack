const express = require("express");

const Product = require("../models/product.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Product));
// router.get("", crudController.get(Product))
router.patch("/:id", crudController.updateOne(Product));
router.delete("/:id", crudController.DeleteOne(Product));
router.get("/:id", crudController.getOne(Product));

router.get("", async (req, res) => {
  try {
    const items = await Product.find()
      .populate("category") // Populate category details
      .populate("owner") // Populate owner details
      .lean()
      .exec();
    console.log(`get request`);
    return res.status(200).send({ items });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
