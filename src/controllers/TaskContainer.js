import Task from '../models/TaskMangerModel.js';

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const getAllTask = (req, res) => {
  try {
    return res.send('all items from the file');
  } catch (error) {}
};

export const getTask = (req, res) => {
  try {
    return res.json({ id: req.params.id });
  } catch (error) {}
};

export const getSingleTask = (req, res) => {
  try {
    return res.send('get single task');
  } catch (error) {}
};

export const updateTask = (req, res) => {
  try {
    return res.send('update task');
  } catch (error) {}
};

export const deleteTask = (req, res) => {
  try {
    return res.send('delete task');
  } catch (error) {}
};
