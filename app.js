import express from 'express';
import 'dotenv/config.js';
import bodyparser from 'body-parser';
import cors from 'cors';
import db from './db/dev/dbConnection.js'

const app = express();

//Configure CORS for all requests
app.use(cors())

//parse application/json
app.use(bodyparser.json())

//

//Listen to the server on port 8000
app.listen(3000);