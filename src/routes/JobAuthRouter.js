import express from 'express';
import { login, register } from '../controllers/JobController';
const JobAuthRouter = express.Router();

JobAuthRouter.route('/register').post(register);
JobAuthRouter.route('/login').post(login);

export default JobAuthRouter;
