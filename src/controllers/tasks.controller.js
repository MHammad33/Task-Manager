const Task = require("../models/Task.model");
const asyncHandler = require("../middleware/async.middleware");

/**
 * @param {*} req 
 * @param {*} res 
 * @returns All tasks
 */
const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
})


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns New task
 */
const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
})

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Task by id
 */
const getTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  // Check if task exists
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${id}` });
  }

  res.json({ task });
})


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Updated task
 */
const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  // Check if task exists
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${id}` });
  }

  res.status(200).json({ task });
})


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Deleted task
 */
const deleteTask = asyncHandler((async (req, res) => {
  const { id } = req.params;

  const deletedTask = await Task.findByIdAndDelete(id);

  // Check if task exists
  if (!deletedTask) {
    return res.status(404).json({ msg: `No task with id: ${id}` });
  }

  res.status(200).json({ task: deletedTask });

}))

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}