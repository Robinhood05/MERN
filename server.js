import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("This is the first Server");
});


// Connect to DB and then start the server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
