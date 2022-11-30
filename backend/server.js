const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();


dotenv.config("./env");

app.get("/", (req,res) => {
    res.status(200).send("Api is running....");
})
app.get("/home", (req,res) => {
    res.status(200).send([{"name" : "Bhupesh"}]);
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started in ${process.env.NODE_ENV} mode at ${PORT} port `.white.bold.inverse);
})