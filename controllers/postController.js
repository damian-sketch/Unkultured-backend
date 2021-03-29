import pool from '../db/dev/pool.js';




// Create a new post
const createPost = (request, response) => {
    const { title, body } = request.body
    const insert = {
      text: 'INSERT INTO posts(title, body) VALUES($1, $2)',
      values: [title, body],
    }
    
  
    pool.query(insert,(error, result) => {
      if (error) {
        console.log(error)
      }
      response.status(201).send('Post added')
    })
  }

// Fetch all posts
const getPosts = (request, response) => {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

export { getPosts, createPost };  