import express from 'express';
import { dashboard, login } from '../controllers/JWTController';
import { authentication } from '../middleware/Auth';

const JWTRouter = express.Router();

JWTRouter.route('/dashboard').get(authentication, dashboard);
JWTRouter.route('/login').post(login);

export default JWTRouter;
