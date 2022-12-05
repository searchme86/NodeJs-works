import express from 'express';
import expressAsyncErrors from 'express-async-errors';
import { notFound } from './middleware/notFound';
import { ErrorHandler } from './middleware/errorHandler';

// import TaskRouter from './routes/TaskRouter';
// import StoreRouter from './routes/StoreRouter';
import JWTRouter from './routes/JWTRouter';

const app = express();

// middleware
// apply static files
app.use(express.static('./public'));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

// Router
// app.use('/api/v1/tasks', TaskRouter);
// app.use('/api/v1/products', StoreRouter);
app.use('/api/v1', JWTRouter);

// Error Handler
app.use(notFound);
app.use(ErrorHandler);

export default app;
