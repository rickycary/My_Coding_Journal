const mongoose = require("./connection");

const { Schema, model } = mongoose
// Journal SCHEMA
const journalSchema = new mongoose.Schema({
    day: {type: String, required: true},
    month: Number,
    dayOfMonth: Number,
    year: Number,
    goal: String,
    goalCompleted: Boolean,
    entry: String,
    project: String,
    link: String,
    todo: String,
})

// Journal Model
const Journal = mongoose.model("Journal", journalSchema)

// Export the Journal Model
module.exports = Journal