import { Hono } from 'hono';
import { fetchAllUsers, insertUser } from './Api'; // Import your database query functions
import fs from 'fs';
import { createServer } from 'http'; 

// Log the current working directory
console.log("Current directory:", process.cwd());

// Log the files in the 'src' directory
console.log("Files in 'src' directory:", fs.readdirSync("./src"));

const app = new Hono();

// Route to get all users
app.get('../Views/Users.vue', async (c) => {
  const users = await fetchAllUsers(); // Fetch users from the database
  return c.json(users);
});

// Route to insert a new user (via POST)
app.post('../Views/Users', async (c) => {
  const { name, email } = await c.req.json(); // Get data from request body
  await insertUser(name, email); // Insert new user into the database
  return c.json({ message: 'User added successfully' });
});

// Define the port
const PORT = 5173;

// Create the server using Node's built-in HTTP module
createServer(async (req, res) => {
  // Create a new response object using Hono
  const honoResponse = await app.fetch(req as any); // Cast req to any

  // Set headers
  honoResponse.headers.forEach((value, key) => res.setHeader(key, value));
  res.writeHead(honoResponse.status); // Set status

  const body = await honoResponse.text(); // Get response body as text
  res.end(body); // Send response body
}).listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
