import express from 'express';
import { coverPosts, stylePosts } from '../controllers/postController.js';

const router = express.Router();

// Get all Posts under different categories
router.get('/covers', coverPosts)
      .get('/style', stylePosts)


export default router;