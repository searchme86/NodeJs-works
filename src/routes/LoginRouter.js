import express from 'express';
import { login } from '../controllers/LoginControllers';

const LoginRouter = express.Router();

LoginRouter.route('/login').get(login);
