import express from 'express';
import {
  getAllProudcts,
  getAllProudctsStatic,
} from '../controllers/StoreController';
const StoreRouter = express.Router();

StoreRouter.route('/').get(getAllProudcts);
StoreRouter.route('/static').get(getAllProudctsStatic);

export default StoreRouter;
