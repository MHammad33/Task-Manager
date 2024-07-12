const Task = require("../models/Task.model");

const getAllTasks = (req, res) => { res.send("Tasks") }

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}

const getTask = (req, res) => { res.json({ id: req.params.id }) }
const updateTask = (req, res) => { res.json({ id: req.params.id }) }
const deleteTask = (req, res) => { res.json({ id: req.params.id }) }

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}