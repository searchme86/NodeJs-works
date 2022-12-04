import Task from '../models/TaskMangerModel.js';

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    // return res.status(200).json({ tasks });
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
    return res.json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const getSingleTask = (req, res) => {
  try {
    return res.send('get single task');
  } catch (error) {}
};

export const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(400).json({ msg: `No task with Id:${taskID}` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
