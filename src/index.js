import express from 'express';
import TaskRouter from './routes/TaskRouter';
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

// init
const port = 3001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
