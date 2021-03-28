import pool from './pool.js';

 pool.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
      console.log('connected baby!')
    }
 });
  


// Create a users table if it does not exist
const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
    email VARCHAR(100) UNIQUE NOT NULL, 
    first_name VARCHAR(100), 
    last_name VARCHAR(100), 
    password VARCHAR(100) NOT NULL,
    created_on DATE NOT NULL)`;
  
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
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_on DATE NOT NULL)`;
  
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
