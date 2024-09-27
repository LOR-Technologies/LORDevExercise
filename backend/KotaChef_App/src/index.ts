import express from 'express';
import cors from 'cors';
import { fetchAllUsers, insertUser } from './Api'; // Import your database query functions

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Adjust as necessary for your frontend URL
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get all users
app.get('/users', async (req, res) => {
  const users = await fetchAllUsers(); // Fetch users from the database
  res.json(users);
});

// Route to insert a new user (via POST)
app.post('/users', async (req, res) => {
  const { name, email } = req.body; // Get data from request body
  await insertUser(name, email); // Insert new user into the database
  res.json({ message: 'User added successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;