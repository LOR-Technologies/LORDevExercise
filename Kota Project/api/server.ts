// server.ts
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import bcrypt from 'bcrypt';
import db from './db';
import { users } from './models';

// Initialize Hono app
const app = new Hono();

// CORS options
app.use(
  '*',
  cors({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// POST route for registration
app.post('/api/register', async (c) => {
  const { username, email, password } = await c.req.json();

  try {
    // Check if the user already exists by email
    const existingUser = await db.select().from(users).where(users.email === email).limit(1);

    if (existingUser.length > 0) {
      return c.json({ message: 'User already exists' }, 409);
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user into the database
    await db.insert(users).values({ username, email, password: hashedPassword });

    return c.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error executing query', error.message);
    return c.json({ message: 'Server error during registration' }, 500);
  }
});

// POST route for login
app.post('/api/login', async (c) => {
  const { email, password } = await c.req.json();

  try {
    // Retrieve the user by email
    const user = await db.select().from(users).where(users.email === email).limit(1);

    if (user.length > 0) {
      const userRecord = user[0];

      // Compare provided password with the stored hashed password
      const match = await bcrypt.compare(password, userRecord.password);

      if (match) {
        return c.json({ message: 'Login successful!' });
      } else {
        return c.json({ message: 'Invalid credentials' }, 401);
      }
    } else {
      return c.json({ message: 'Invalid credentials' }, 401);
    }
  } catch (error) {
    console.error('Error executing query', error.message);
    return c.json({ message: 'Server error during login' }, 500);
  }
});

// Test route for checking API status
app.get('/', (c) => c.text('Welcome to the Kota Shop API!'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
