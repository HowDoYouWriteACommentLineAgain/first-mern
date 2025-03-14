const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = {username:"john",password:"doe"}; // In-memory storage for tasks

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const task = { id: tasks.length + 1, text: req.body.text };
  tasks.push(task);
  res.json(task);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
  res.json({ message: "Task deleted" });
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));

//code for server.js
 