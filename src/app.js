// Importing the Express module and creating an Express application instance.
const express = require("express");
const app = express();

// Importing the tasks module
const tasks = require("./routes/tasks");

// Middleware
app.use(express.json());

// ---Routes---
// Route Handkes for the "/Hello endpoint"
// Responds witha simple message indicating the name of the Task Manager App
// req - The request object containing information about the incoming request.
// res - The response object used to send a response back to the client.
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

// Middleware is a piece of software or a function that sits between two layers of an application or system and performs a specific task.
// Middleware for the "/api/v1/tasks" endpoint.
// Mounts the specified route middleware to handle requests to the "/api/v1/tasks" endpoint.
app.use("/api/v1/tasks", tasks);

// Port
const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`));
