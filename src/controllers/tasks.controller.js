const Task = require("../models/Task.model");
const asyncHandler = require("../middleware/async.middleware");
const { createCustomError } = require("../errors/error");

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
  console.log("createTask");
  console.log("Request Body:", req.body);

  const task = await Task.create(req.body);
  console.log("Created Successfully");
  res.status(201).json({ task });
})

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Task by id
 */
const getTask = asyncHandler(async (req, res, next) => {
  console.log("getTask");
  const { id } = req.params;

  const task = await Task.findById(id);


  // Check if task exists
  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }

  res.json({ task });
})


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Updated task
 */
const updateTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  // Check if task exists
  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }

  res.status(200).json({ task });
})


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Deleted task
 */
const deleteTask = asyncHandler((async (req, res, next) => {
  const { id } = req.params;

  const deletedTask = await Task.findByIdAndDelete(id);

  // Check if task exists
  if (!deletedTask) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }

  res.status(200).json({ task: deletedTask });

}))

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}