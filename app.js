import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/mongo.js';
import 'dotenv/config.js';
import users from './routes/users.js'
import posts from './routes/posts.js'
import bodyparser from 'body-parser';


const app = express();

//parse application/json
app.use(bodyparser.json())

//Hit the users routes
app.use('/users', users);

//Hit the  posts route
app.use('/', posts);

//  Connect to db
mongoose.connect(process.env.DB_CONNECTION, config, (err) => {
    console.log(err);
})
//Listen to the server on port 3000
app.listen(3000);