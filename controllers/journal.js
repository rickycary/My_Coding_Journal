const { application } = require("express");
const express = require("express");
const Journal = require("../models/journal")
const Project = require("../models/project")



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
            entry: "Today I sent in my 2nd project to get approval from my instructors at GA. It has been approved and now I am going to begin creating my routes to meet MVP. We have class tonight to work on our projects so that will be a good time to work on the tasks.",
            project: "Amiibo Project",
            link: "https://rickycary.github.io/project1/",
            todo: "Make Project page and to do page"

        },
        {
            day: "Wednesday", 
            month: 12,
            dayOfMonth: 7,
            year: 2022,
            goal: "Work on styling my project",
            goalCompleted: false,
            entry: "Will return on this day",
            project: "Amiibo Project",
            link: "https://rickycary.github.io/project1/",
            todo: "Make Project page and to do page"
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
router.get("/new", (req, res) => {
    res.render("journal/new.ejs")
})

// Destroy Route - Delete
router.delete("/:id", async (req, res) => {
    await Journal.findByIdAndRemove(req.params.id).catch((error) => errorHandler(error, res))
    res.redirect("/journal")
})

// Update Route - Put
router.put("/:id", async (req, res) => {

    req.body.goalCompleted = Boolean(req.body.goalCompleted)

    await Journal.findByIdAndUpdate(req.params.id, req.body)

    res.redirect("/journal")
})

// Create Route - Post
router.post("/", async (req, res) => {
    // Make sure goalCompteted is true or false 
    req.body.goalCompleted = Boolean(req.body.goalCompleted)
    await Journal.create(req.body).catch((error) => errorHandler(error, res))
    res.redirect("/journal")
})

// Edit Route - Get
router.get("/:id/edit", async (req, res) => {
    const journal = await Journal.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render("journal/edit.ejs", {journal})
})

// Show Route - Get
router.get("/:id", async (req, res) => {
    const journal = await Journal.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render("journal/show.ejs", {journal})
})



// Export the router
module.exports = router