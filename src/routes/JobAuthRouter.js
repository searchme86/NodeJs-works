import express from 'express';
import { login, register, updateUser } from '../controllers/JobController';
import { Auth } from '../middleware/Auth';
const JobAuthRouter = express.Router();

JobAuthRouter.route('/register').post(register);
JobAuthRouter.route('/login').post(login);
JobAuthRouter.route('/updateUser').patch(Auth, updateUser);

export default JobAuthRouter;
