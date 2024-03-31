var express = require("express");
var router = express.Router();
const Project = require("../models/project");

router.post("/api/project", async function (req, res, next) {
  try {
    const { name, date, time } = req.body;

    // Create project
    const project = new Project({ name, date, time });

    // Save project to database
    await project.save();

    // Return project object if successful
    return res.status(200).json(project);
  } catch (err) {
    // Return error message if there's an error
    return res.status(500).json({ error: "Failed to create project" });
  }
});

// router.get /api/projects
router.get("/api/projects", async function (req, res, next) {
  try {
    const projects = await Project.find({});
    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500).json({ error: "Failed to get projects" });
  }
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
