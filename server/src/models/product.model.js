const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category:{type: mongoose.Schema.Types.ObjectId, ref: "category", required: true},
    image: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
}, {
    versionKey: false, //  __v
    timestamps: true   // creatrdAt, updatedAt
})

// step 2:- connect the schema to the products collection
module.exports = mongoose.model("product", productSchema) //products