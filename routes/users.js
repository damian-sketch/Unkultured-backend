import express from 'express';
import { getToken, createUser, authenticateToken } from '../controllers/userController.js';
const router = express.Router();

// Create a user
router.post('/create-user', authenticateToken, createUser) 

// Get login token
router.post('/login', getToken)




export default router;