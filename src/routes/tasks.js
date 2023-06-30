// Import the Express.js framework
const express = require("express");

// Create a modular, mountable router object.
const router = express.Router();

// Get the getAllTaks method
const {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

// Set up a route for the root URL ("/")
router
  .route("/")
  .get(getAllTasks) // Handle HTTP GET requests to retrieve all tasks
  .post(createTask); // Handle HTTP POST requests to create a new task

// Set up a route for URLs with an ID parameter ("/:id")
router
  .route("/:id")
  .get(getTask) // Handle HTTP GET requests to retrieve a specific task
  .patch(updateTask) // Handle HTTP PATCH requests to update a specific task
  .delete(deleteTask); // Handle HTTP DELETE requests to delete a specific task

// Exportin the router module
module.exports = router;
