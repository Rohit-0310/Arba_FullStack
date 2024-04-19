const express = require("express");

const Category = require("../models/category.model")

const crudController = require("./crud.controller")

const router = express.Router();


router.post ("", crudController.post(Category))
// router.get("", crudController.get(Category))
router.patch("/:id", crudController.updateOne(Category))
router.delete("/:id", crudController.DeleteOne(Category))
router.get("/:id", crudController.getOne(Category))

router.get('', async (req, res) => {
    try {
        const items = await Category.find().populate('owner').lean().exec();
        console.log(`get request`);
        return res.status(200).send({ items });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});

module.exports = router;