const mongoose = require("./connection")

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    link: String,
    description: String
}, {timestamps: true})

const Project = mongoose.model("Project", projectSchema)

module.exports = Project