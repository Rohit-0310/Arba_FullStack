const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true},
    image: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
}, {
    versionKey: false, //  __v
    timestamps: true   // creatrdAt, updatedAt
})

// step 2:- connect the schema to the categorys collection
module.exports = mongoose.model("category", categorySchema) //categorys