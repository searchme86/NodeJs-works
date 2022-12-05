import mongoose from 'mongoose';
// 여기서 부터
// import Store from './models/Store';
// import jsonProducts from './data/products.json';
// 여기까지 삭제

export const connectToDB = (cb) => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // 여기부터
    // Store.deleteMany();
    // Store.create(jsonProducts);
    // 여기까지 삭제
    cb();
    console.log('Db connect successful');
  } catch (error) {
    cb(error);
    console.log('Mongoose Connection Error!', error);
  }
};

const handleOpen = () => console.log('Connected to DB!');
const handleError = (error) => console.log('DB Error', error);

const db = mongoose.connection;

db.on('error', handleError);
db.once('open', handleOpen);
