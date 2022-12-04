import './env.js';
import { connectToDB } from './db.js';

// Mongoose Model
import './models/TaskMangerModel.js';

import app from './server';

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`server is listening on ${PORT}`);
};

connectToDB((err) => {
  if (!err) {
    app.listen(PORT, handleListening);
  }
});
