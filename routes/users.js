import express from 'express';
import { getToken, authenticateToken } from '../controllers/userController.js';
const router = express.Router();

// Create a user
router.get('/create', authenticateToken) 

// Get login token
router.post('/login', getToken)




export default router;