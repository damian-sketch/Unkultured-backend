import pool from './pool.js';


  


// Create a users table if it does not exist
const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
    email VARCHAR(100) UNIQUE NOT NULL, 
    first_name VARCHAR(100), 
    last_name VARCHAR(100), 
    password VARCHAR(100) NOT NULL)`;
  
    pool.query(userCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };

// Create a Posts table if it does not exist
const createPostTable = () => {
    const postCreateQuery = `CREATE TABLE IF NOT EXISTS posts
    (id SERIAL PRIMARY KEY, 
    title VARCHAR(100) NOT NULL, 
    body VARCHAR(100) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,)`;
  
    pool.query(postCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };


 

export {
    createUserTable, 
    createPostTable
  };
