import express from 'express';
import allPosts from '../controllers/postController.js';

const router = express.Router();

// Get all cover Posts
router.get('/covers', allPosts) 

export default router;