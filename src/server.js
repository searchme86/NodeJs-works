import express from 'express';
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
app.use(rateLimit);
app.use(xss());

// apply static files
app.use(express.static('./public'));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

// Router
// app.use('/api/v1/tasks', TaskRouter);
// app.use('/api/v1/products', StoreRouter);
// app.use('/api/v1', JWTRouter);
app.use('/api/v1/jobs', JobRouter);
app.use('/api/v1/auth', Auth, JobAuthRouter);

// Error Handler
app.use(notFound);
app.use(ErrorHandlerMiddleware);

export default app;
