import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';

// Load dotenv file to make environment variables usable
dotenv.config();

const pool = new Pool({
    user: 'cedric',
    host: '127.0.0.1',
    database: 'Test',
    password: 'Garfield007',
    port: 5432,
    connectionString: process.env.DATABASE_URL 
  })


export default pool;