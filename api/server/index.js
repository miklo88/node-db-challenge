const express = require("express");
const db = require("../../data/dbconfig");
// SERVER
const server = express();

// SERVER API
server.get("/", (req, res) => {
  res.status(200).json({
    message: "Hi i'm Carl's API!"
  });
});
// GET PROJECTS
server.get("/projects", async (req, res) => {
  const projects = await db("Projects");
  try {
    res.status(200).json(
      projects.map(proj => {
        return {
          id: proj.id,
          Name: proj.Name,
          Description: proj.Description,
          Completed: `${proj.Completed === 1 ? "true" : "false"}`
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: "ay dio mio" });
  }
});

// POST NEW PROJECT
server.post("/projects", async (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({ message: "Project Name," });
  }
  try {
    res.status(201).json(await db("Projects").insert(req.body));
  } catch (err) {
    res.status(500).json({ message: "ay dio mio" });
  }
});

// GET RESOURCES
server.get("/resources", async (req, res) => {
  try {
    res.status(200).json(await db("Resources"));
  } catch (err) {
    res.status(500).json({ message: "ay dio mio" });
  }
});

// POST RESOURCE
server.post("/resources", async (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({ message: "Resource Name." });
  }
  try {
    res.status(201).json(await db("Resources").insert(req.body));
  } catch (err) {
    res.status(500).json({ message: "ay dio mio" });
  }
});

// GET TASKS
server.get("/tasks", async (req, res) => {
  try {
    const tasks = await db("Tasks");
    res.status(200).json(
      tasks.map(task => {
        return {
          id: task.id,
          Description: task.Description,
          Notes: task.Notes,
          Project_Id: task.Project_Id,
          Completed: `${task.Completed === 0 ? "false" : "true"}`
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: "ay dio mio" });
  }
});

// POST TASK ////// STILL NEED TO DBUG
server.post("/tasks", async (req, res) => {
  try {
    if (!req.body.Description) {
      res.status(400).json({
        message: "Task description."
      });
    } else if (!req.body.Project_id) {
      res.status(400).json({
        message: "Project id."
      });
    }
    res.status(201).json(await db("Tasks").insert(req.body));
  } catch (err) {
    res.status(500).json({ message: "ay dio mio" });
  }
});

// // GET PROJECT BY ID ////// STILL NEED TO COMPLETE
server.get("/projects/:id", async (req, res) => {
  try {
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = server;
