const mongoose = require("./connection");

// Journal SCHEMA
const journalSchema = new mongoose.Schema({
    day: {type: String, required: true},
    month: Number,
    dayOfMonth: Number,
    year: Number,
    goal: String,
    goalCompleted: Boolean,
    entry: String
}, {timestamps: true})

// Journal Model
const Journal = mongoose.model("Journal", journalSchema)

// Export the Journal Model
module.exports = Journal