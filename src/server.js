import express from 'express';
import path from 'path';
import expressAsyncErrors from 'express-async-errors';
import { notFound } from './middleware/notFound';
import { ErrorHandlerMiddleware } from './middleware/errorHandler';

//security set-up
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';

// Auth middleware
import { Auth } from './middleware/Auth';

// import TaskRouter from './routes/TaskRouter';
// import StoreRouter from './routes/StoreRouter';
// import JWTRouter from './routes/JWTRouter';
import JobRouter from './routes/JobRouter';
import JobAuthRouter from './routes/JobAuthRouter';

const app = express();

// middleware
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());

// apply static files
// app.use(express.static('./public'));
app.use(express.static(path.resolve(__dirname, '../client/build')));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

// Router
// app.use('/api/v1/tasks', TaskRouter);
// app.use('/api/v1/products', StoreRouter);
// app.use('/api/v1', JWTRouter);
app.use('/api/v1/auth', JobAuthRouter);
app.use('/api/v1/jobs', Auth, JobRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Error Handler
app.use(notFound);
app.use(ErrorHandlerMiddleware);

export default app;
