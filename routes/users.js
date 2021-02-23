import express from 'express';
import { getToken, createUser } from '../controllers/userController.js';
const router = express.Router();

// CREATE A USER
router.post('/create-user', createUser) 

// Get login token
router.post('/login', getToken)




export default router;