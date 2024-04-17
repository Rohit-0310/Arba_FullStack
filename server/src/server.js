const express = require("express");

const connect = require("./configs/db")

const PORT = 3001


const app = express();

app.use(express.json());


app.listen(`${PORT}`, async function(){
    await connect();
    console.log(`listening on port ${PORT}`)
});