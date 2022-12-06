import express from 'express';
import {
  createJobs,
  getAllJobs,
  getJob,
  deleteJobs,
} from '../controllers/JobController';
const JobRouter = express.Router();

JobRouter.route('/').post(createJobs).get(getAllJobs);
JobRouter.route('/:id').get(getJob).delete(deleteJobs);

export default JobRouter;
