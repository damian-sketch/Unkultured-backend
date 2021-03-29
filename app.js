import express from 'express';
import 'dotenv/config.js';
import bodyparser from 'body-parser';
import cors from 'cors';
import posts from './routes/posts.js';
import users from './routes/users.js'
import pool from './db/dev/pool.js';

pool.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
      console.log('connected baby!')
    }
 });

const app = express();

//Configure CORS for all requests
app.use(cors())

//parse application/json
app.use(bodyparser.json())

// get all posts
app.use('/', posts);

//users route
app.use('/users', users);


//Listen to the server on port 8000
app.listen(3000, (err) => {
    if (err){
    console.log('err')
    }
    else{
        console.log('Running on port 3000!')
    }
});