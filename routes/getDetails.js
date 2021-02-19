import express from 'express';

const router = express.Router();

export const details = (req, res) => {
    res.send('These are the details');
}

router.get('/', details);