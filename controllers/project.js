const { application } = require("express")
const express = require("express")
const Project = require("../models/project")
const router = express.Router()

function errorHandler(error, res){
    res.json(error)
}

router.get("/seed", async (req, res) => {
    await Project.remove({}).catch((error) => errorHandler(error, res))
    const projects = await Project.create([
        {name: "Amiibo Project", link: "https://rickycary.github.io/project1/", description: "An app that helps you find any amiibo"},
        {name: "My Coding Journal", link: "https://turmericproject2.onrender.com/", description: "An online journal that you can track you coding journey."}
    ]).catch((error) => errorHandler(error, res))
    res.json(projects)
})

// INDUCES ROUTES

router.get("/", async (req, res) => {
    const projects = await Project.find({}).catch((error) => errorHandler(error, res))
    res.render("project/index.ejs", {projects})
});

router.get("/:id", async (req, res) => {
    const project = await Project.findById(req.params.id)
    res.render("project/show.ejs", {project})
})

module.exports = router