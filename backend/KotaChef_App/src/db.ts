import { drizzle } from 'drizzle-orm/node-postgres';
import { foodItemsTable } from './Schema'; 
import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('Database Connection String:', String(process.env.DATABASE_URL));


// Create a pool with the connection string
const { Pool } = pg;
const pool = new Pool({
  connectionString: String(process.env.DATABASE_URL), // Ensure it's a string
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully:', res.rows[0]);
  }
  pool.end();
});

// Initialize drizzle with the pool
export const db = drizzle(pool);

export { foodItemsTable };
