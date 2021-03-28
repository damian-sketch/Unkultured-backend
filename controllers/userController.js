import 'dotenv/config.js';
import jwt from 'jsonwebtoken';


// Generate access token for given user
function getToken(req, res) {
    const username = req.body.username
    const user = { username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY)
    res.json({ accessToken })
}

// Authenticate token (called on protected endpoints)
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if(err) return res.sendStatus(403)
        req.author = user
        next()
    })
}

export { getToken, authenticateToken };