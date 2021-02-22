import express from 'express';
import { coverPosts, stylePosts, allPosts } from '../controllers/postController.js';

const router = express.Router();

// Get all Posts under different categories
router.get('/', allPosts)
      .get('/covers', coverPosts)
      .get('/style', stylePosts)


export default router;