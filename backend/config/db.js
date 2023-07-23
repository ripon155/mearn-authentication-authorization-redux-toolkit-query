import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = process.env.MONGO_URI;

mongoose.set('strictQuery', false);

export const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useNewUrlParser: true,

      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connect'))
    .catch((err) => {
      console.error(err.message);
      //   process.exit(1);
    });
};
