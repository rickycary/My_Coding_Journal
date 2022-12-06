require("dotenv").config()
const mongoose = require("mongoose")

// Establish a connection
mongoose.connect(process.env.MONGO)

// Connection Events
mongoose.connection
.on("open", () => {console.log("Connected to Mongo")})
.on("close", () => {console.log("Disconnected from Mongo")})
.on("error", () => {console.log(error)})

// Export the mongoose object
module.exports = mongoose