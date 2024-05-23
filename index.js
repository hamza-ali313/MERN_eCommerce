import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv";
const app = express();
dotenv.config()
import cors from 'cors';
import cookieParser from "cookie-parser";
import path from "path"
import * as url from 'url';

import productRoutes from "./routes/productRoutes/index.js"


app.use('/uploads', express.static('uploads')); // To serve static files
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api/products/',productRoutes)

mongoose.connect(process.env.MONGO)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB..."));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});