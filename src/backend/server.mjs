import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

// Load environment variables
dotenv.config({ path: path.resolve(new URL(import.meta.url).pathname, '../.env') });

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://admin:KpM6wT7B8x1Icb1ELmFHYk8gKZCCLR2V@dpg-crkjfnu8ii6s7380q5c0-a.frankfurt-postgres.render.com/nungo_rajd',
  ssl: {
    rejectUnauthorized: false, // Adjust this based on your security needs
  },
  connectionTimeoutMillis: 20000, // 10 seconds connection timeout
  idleTimeoutMillis: 30000,       // 30 seconds idle timeout
});

// Connect to the database
pool.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error', err));

// Initialize Express
const app = express();

// Set up custom CORS
const allowedOrigins = ['http://localhost:5173', 'https://your-frontend-domain.com']; // Customize with your frontend URLs
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow credentials like cookies
  optionsSuccessStatus: 200, // For legacy browsers that don't accept 204
};

app.use(cors(corsOptions)); // Apply CORS middleware
app.use(express.json()); // For parsing application/json

// POST route for registration
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST route for login
app.post('/api/login', async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE (username = $1 OR email = $2)', [usernameOrEmail, usernameOrEmail]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Welcome route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Kota Shop API!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});















