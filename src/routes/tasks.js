// Import the Express.js framework
const express = require("express");

// Create a modular, mountable router object.
const router = express.Router();

// Create a route handler for the root URL ("/") using Express Router
// Handle GET requests to the root URL
router.route("/").get((req, res) => {
  // Send a response with the message "All Items"
  res.send("All Items");
});

// Exportin the router module
module.exports = router;
