import Task from '../models/TaskMangerModel.js';
import { AsyncWrapper } from '../utils/AsyncWrapper.js';
import { createCustomError } from '../utils/CustomError.js';

export const createTask = AsyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
});

export const getAllTask = AsyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json({ tasks });
});

export const getTask = AsyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  }
  return res.json({ task });
});

export const updateTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  }
  return res.status(200).json({ task });
});

export const deleteTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  }
  return res.status(200).json({ task });
});

export const getSingleTask = (req, res) => {
  try {
    return res.send('get single task');
  } catch (error) {}
};
