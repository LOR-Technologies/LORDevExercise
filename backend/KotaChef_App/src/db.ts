import { drizzle } from 'drizzle-orm/node-postgres';
import { foodItemsTable } from './Schema'; 
import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('Database Connection String:', process.env.DATABASE_URL);

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  // This disables certificate verification, but is acceptable for development.
  },
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully:', res.rows[0]);
  }
  pool.end();
});

export const db = drizzle(pool);
export { foodItemsTable };
