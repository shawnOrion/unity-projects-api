var express = require("express");
var router = express.Router();
const Project = require("../models/project");

router.post("/api/project", function (req, res, next) {
  const { name, date, time } = req.body;

  // Create project
  const project = new Project({ name, date, time });

  // Save project to database
  project.save(function (err) {
    if (err) {
      // Return error message if there's an error
      return res.status(500).json({ error: "Failed to create project" });
    }

    // Return project object if successful
    return res.status(200).json(project);
  });
});

// router.get /api/projects
router.get("/api/projects", function (req, res, next) {
  Project.find({}, function (err, projects) {
    if (err) {
      return res.status(500).json({ error: "Failed to get projects" });
    }

    return res.status(200).json(projects);
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
