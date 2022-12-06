const { application } = require("express");
const express = require("express");
const Journal = require("../models/journal")

// Create the router
const router = express.Router();

// Error handler
function errorHandler(error, res) {
    res.json(error)
}

// Routes

// SEED Route
router.get("/seed", async (req, res) => {
    await Journal.remove({}).catch((error) => errorHandler(error, res))
    const journals = await Journal.create([
        {
            day: "Tuesday", 
            month: 12,
            dayOfMonth: 6,
            year: 2022,
            goal: "Complete all Crud routes on project 2",
            goalCompleted: false,
            entry: "Today I sent in my 2nd project to get approval from my instructors at GA. It has been approved and now I am going to begin creating my routes to meet MVP. We have class tonight to work on our projects so that will be a good time to work on the tasks."
        },
        {
            day: "Wednesday", 
            month: 12,
            dayOfMonth: 7,
            year: 2022,
            goal: "Work on styling my project",
            goalCompleted: false,
            entry: "Will return on this day"
        }
    ]).catch((error) => errorHandler(error, res))
    res.json(journals)
})

// INDUCES (Index, New, Destroy, Update, Create, Edit, Show)

// Index Route - Get
router.get("/", async (req, res) => {
    const journals = await Journal.find({}).catch((error) => errorHandler(error, res))
    res.render("journal/index.ejs", {journals})
});

// New Route - Get

// Destroy Route - Delete

// Update Route - Put

// Create Route - Post

// Edit Route - Get

// Show Route - Get



// Export the router
module.exports = router