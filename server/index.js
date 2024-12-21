const express = require("express");
const mongoose = require("mongoose");
const MongoConnect = require('./db');
const cors = require('cors');

// database connection
MongoConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.listen(9000, () => console.log("Server is listening on port 9000..."));

// model and schema hai
const taskSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);



app.post("/task", async (req, res) => {
  try {
    const { task } = req.body; 
    if (!task) {
      return res.status(400).json({
        message: "Task field is required",
        success: false,
        error: true,
      });
    }

    const addTask = await taskModel.create({ task });

    res.status(201).json({
      message: "Task created successfully",
      success: true,
      error: false,
      data: addTask,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Server error",
      success: false,
      error: true,
    });
  }
});




//  Fetch all tasks
app.get("/getAllTask", async (req, res) => {
  try {
    const getAllTask = await taskModel.find();

    res.status(200).json({
      message: "Tasks fetched successfully",
      success: true,
      error: false,
      data: getAllTask,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Server error",
      success: false,
      error: true,
    });
  }
});
