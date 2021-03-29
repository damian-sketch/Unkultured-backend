import { getPosts, createPost } from '../controllers/postController.js';
import { Router } from 'express';

const router = Router();

router.get('/', getPosts);
router.post('/create-post', createPost);

export default router;