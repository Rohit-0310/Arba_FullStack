const express = require("express");

const connect = require("./configs/db")

const PORT = 3001


const userController = require("./controllers/user.controller")

const app = express();

app.use(express.json());


app.use("/users", userController);

app.listen(`${PORT}`, async function(){
    await connect();
    console.log(`Server is listening on port ${PORT}`)
});