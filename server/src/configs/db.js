const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://arba:arba@arba.gig3wvx.mongodb.net/arba")
}

module.exports = connect