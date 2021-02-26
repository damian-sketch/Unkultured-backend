import express from 'express';
import { coverPosts, stylePosts, allPosts, culturePosts, musicPosts, videoPosts, createPost, Featuredstyle, Sneakerheads, Featuredmusic, Featuredculture, Lyrics, Newreleases, Popnews } from '../controllers/postController.js';
import { authenticateToken }from '../controllers/userController.js'

const router = express.Router();

// Get Posts by their categories
router.get('/', allPosts)
      .get('/covers', coverPosts)
      .get('/style', stylePosts)
      .get('/culture', culturePosts)
      .get('/music', musicPosts)
      .get('/videos', videoPosts)

// Get Posts by their sub-categories      
router.get('/style/featured', Featuredstyle)
      .get('/style/sneakerheads', Sneakerheads)
      .get('/music/featured', Featuredmusic)
      .get('/music/lyrics', Lyrics)
      .get('/music/new-releases', Newreleases)
      .get('/culture/featured', Featuredculture)
      .get('/culture/pop-news', Popnews)

// Create a post
router.post('/create-post', authenticateToken, createPost)      


export default router;