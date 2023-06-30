// Get all tasks function
const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

// Create task function
const createTask = (req, res) => {
  res.json(req.body);
};

// Get tasks function
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("Update task");
};
const deleteTask = (req, res) => {
  res.send("Delete task");
};

// Export as an objetc
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
