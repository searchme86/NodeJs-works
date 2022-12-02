import express from 'express';
const app = express();

// apply static files
app.use(express.static('./public'));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

// Router

app.listen(5001, () => {
  console.log('server is listening on port 5001');
});
