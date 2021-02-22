import express from 'express';
import createUser from '../controllers/createUser.js';

const router = express.Router();

// CREATE A USER

router.post('/create-user', createUser) 


export default router;