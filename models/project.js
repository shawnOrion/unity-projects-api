const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
