import express from 'express';
import TaskRouter from './routes/TaskRouter';
import { notFound } from './middleware/notFound';

const app = express();

// middleware

// apply static files
app.use(express.static('./public'));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

// Router
app.use('/api/v1/tasks', TaskRouter);
app.use(notFound);

export default app;
