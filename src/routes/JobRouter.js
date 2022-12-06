import express from 'express';
import {
  createJobs,
  getAllJobs,
  getJob,
  deleteJobs,
  updateJobs,
  showStats,
} from '../controllers/JobController';
import { testUser } from '../middleware/testUser';
const JobRouter = express.Router();

JobRouter.route('/').post(testUser, createJobs).get(getAllJobs);
JobRouter.route('/:id')
  .get(getJob)
  .delete(testUser, deleteJobs)
  .patch(testUser, updateJobs);
JobRouter.route('/stats').get(showStats);

export default JobRouter;
