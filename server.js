// Import Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const JournalRouter = require("./controllers/journal")
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// Create Express App
const app = express();

// Establish Mono Connection
mongoose.connect(process.env.MONGO)

// Mongoose Connection Events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected to Mongo"))
.on("error", (error) => console.log(error))

// Register Middleware 
app.use(morgan("dev"));
app.use("/journal", JournalRouter)
app.use("/static", express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Routes and Routers
app.get("/", (req, res) => {
    res.send("<h1>Server is working</h1>")
});

// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening onf port: ${PORT}!`)
})