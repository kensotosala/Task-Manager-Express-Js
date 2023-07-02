// Connection to mongoose
const mongoose = require("mongoose");

// DB Credentials
const connectionString =
  "mongodb+srv://kendevtech:XlGHXqAaOqsWB07Q@nodeexpressprojects.4oq2wxn.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  // Establish the connection
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
