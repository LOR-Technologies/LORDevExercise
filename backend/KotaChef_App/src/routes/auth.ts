import { Hono } from 'hono';
const app = new Hono();

app.post('/register', async (c) => {
  // Handle registration
  return c.json({ message: 'User registered' });
});

app.post('/login', async (c) => {
  // Handle login
  return c.json({ message: 'User logged in' });
});

export default app;
