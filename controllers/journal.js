// Dependencies 
const express = require("express");
const Journal = require("../models/journal");

// Create router object
const router = express.Router();

// Register Routes w/ the router
router.get("/", (req, res) => {
    res.send("You hit the journal router")
})

// Export the router
module.exports = router