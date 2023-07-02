// Connection to mongoose
const mongoose = require("moongose");

// DB Credentials
const connectionString =
  "mongodb+srv://kendevtech:XlGHXqAaOqsWB07Q@nodeexpressprojects.4oq2wxn.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

// Establish the connection
moongoose.connect(connectionString).then(() => console.log());
