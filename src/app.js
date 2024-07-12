// Connect to the database and start the server
const connectDb = require("./db/connectDb");

const express = require("express");
const app = express();
const port = 3000;

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
})

// app.get("/api/v1/tasks")         -- get all the tasks
// app.post("/api/v1/tasks")        -- create a new task
// app.get("/api/v1/tasks/:id")     -- get a single task
// app.patch("/api/v1/tasks/:id")   -- update a task
// app.delete("/api/v1/tasks/:id")  -- delete a task

const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
}

start();