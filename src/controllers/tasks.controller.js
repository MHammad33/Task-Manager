const Task = require("../models/Task.model");

const getAllTasks = (req, res) => { res.send("Tasks") }
const createTask = (req, res) => { res.json(req.body) }
const getTask = (req, res) => { res.json({ id: req.params.id }) }
const updateTask = (req, res) => { res.json({ id: req.params.id }) }
const deleteTask = (req, res) => { res.json({ id: req.params.id }) }

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}