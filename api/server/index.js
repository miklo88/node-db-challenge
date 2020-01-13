const express = require("express");
const db = require("../../data/dbconfig");
// SERVER
const server = express();

// SERVER API
server.get("/", (req, res) => {
  res.status(200).json({
    message: "Hi i'm an API!"
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
    res.status(500).json({ message: "Server error." });
  }
});

// POST NEW PROJECT
server.post("/projects", async (req, res) => {
  if (!req.body || !req.body.name) {
    return res
      .status(400)
      .json({ message: "Please include a project name in your request." });
  }
  try {
    res.status(201).json(await db("Projects").insert(req.body));
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// GET RESOURCES
server.get("/resources", async (req, res) => {
  try {
    res.status(200).json(await db("Resources"));
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// POST RESOURCE
server.post("/resources", async (req, res) => {
  if (!req.body || !req.body.name) {
    return res
      .status(400)
      .json({ message: "Please include a resource name in your request." });
  }
  try {
    res.status(201).json(await db("Resources").insert(req.body));
  } catch (err) {
    res.status(500).json({ message: "Server error." });
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
    res.status(500).json({ message: "Server error." });
  }
});

// POST TASK
server.post("/tasks", async (req, res) => {
  if (!req.body.description) {
    res.status(400).json({
      message: "You must include a task description in your post request body."
    });
  } else if (!req.body.project_id) {
    res.status(400).json({
      message:
        "You must include the project id associated with your task in your post request body."
    });
  }
  try {
    res.status(201).json(await db("Tasks").insert(req.body));
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = server;
