import { Hono } from 'hono';  
import { db } from './db';  

const app = new Hono();


app.get('/items', async (c) => {
  const items = await db.query('SELECT * FROM food_items');  
  return c.json(items);
});

export default app;
