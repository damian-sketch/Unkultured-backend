import express from 'express';
import { coverPosts, stylePosts, allPosts, culturePosts, musicPosts, videoPosts, createPost } from '../controllers/postController.js';
import { authenticateToken }from '../controllers/userController.js'

const router = express.Router();

// Get all Posts under different categories
router.get('/', allPosts)
      .get('/covers', coverPosts)
      .get('/style', stylePosts)
      .get('/culture', culturePosts)
      .get('/music', musicPosts)
      .get('/videos', videoPosts)

// Create a post
router.post('/create-post', authenticateToken, createPost)      


export default router;