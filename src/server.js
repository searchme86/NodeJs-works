import express from 'express';
import { notFound } from './middleware/notFound';
import { ErrorHandler } from './middleware/errorHandler';
// import TaskRouter from './routes/TaskRouter';
// import StoreRouter from './routes/StoreRouter';
import expressAsyncErrors from 'express-async-errors';

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

// Error Handler
app.use(notFound);
app.use(ErrorHandler);

export default app;
