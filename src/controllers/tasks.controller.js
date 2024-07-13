const Task = require("../models/Task.model");

/**
 * @param {*} req 
 * @param {*} res 
 * @returns All tasks
 */
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns New task
 */
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}

const getTask = async (req, res) => {
  try {

    const { id } = req.params;
    const task = await Task.findById(id);

    // Check if task exists
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }

    res.json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}


const updateTask = (req, res) => { res.json({ id: req.params.id }) }
const deleteTask = (req, res) => { res.json({ id: req.params.id }) }

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}