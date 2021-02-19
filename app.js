import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/mongo.js';
import 'dotenv/config.js';

const app = express();

//Routes
app.get('/', (req,res) => {
    res.send('Hello World');
})


//  Connect to db
mongoose.connect(process.env.DB_CONNECTION, config, () => {
    console.log('Connected to db');
})
//Listen to the server on port 3000
app.listen(3000);