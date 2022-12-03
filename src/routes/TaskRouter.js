import express from 'express';
import {
  getAllTask,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from '../controllers/taskContainer';

const TaskRouter = express.Router();

TaskRouter.route('/').get(getAllTask).post(createTask);

TaskRouter.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default TaskRouter;
