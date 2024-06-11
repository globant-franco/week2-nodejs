const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose"); // ORM for Mongo

// Create an Express application
import app from './app'

// Set the port number for the server
const PORT:number = parseInt(process.env.PORT as string, 10) || 3001;

// Database configuration
mongoose
  .connect(process.env.DATABASE as string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${PORT}`);
});
