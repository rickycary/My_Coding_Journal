// Dependencies 
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const JournalRouter = require("./controllers/journal")

// Application object
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("public"));

// Routes and Routers 

app.get("/", (req, res) => {
    res.send("Server is working")
})

const PORT = process.env.PORT || 3000
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}!`)
})

// Register routers 
app.use("/journal", JournalRouter)