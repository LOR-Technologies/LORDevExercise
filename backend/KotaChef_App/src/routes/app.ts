import { Hono } from 'hono';
import { db, foodItemsTable } from '../db';  // Adjust the path based on your setup
import { DrizzleError } from 'drizzle-orm';  // Import types as needed
import { fetchAllUsers, insertUser } from '../Api';
import { createServer, IncomingMessage, ServerResponse} from 'http';

const app = new Hono();

app.get('/', (c) => {
  return c.json({ message: 'Welcome to the API!' });
});

app.get('/users', async (c) => {
  const users = await fetchAllUsers(); // Fetch users from the database
  return c.json(users);
});

app.post('/users', async (c) => {
  const { name, email } = await c.req.json(); // Get data from request body
  await insertUser(name, email); // Insert new user into the database
  return c.json({ message: 'User added successfully' });
});

// Route to get all items
app.get('/items', async (c) => {
  try {
    // Drizzle query using the foodItemsTable directly
    const items = await db.select().from(foodItemsTable).execute();
    return c.json(items);
  } catch (error) {
    if (error instanceof DrizzleError) {
      console.error('Drizzle ORM Error:', error.message);
    } else {
      console.error('Error fetching items:', error);
    }
    return c.json({ error: 'Failed to fetch items' }, 500);
  }
});

const PORT = 3000;

// Create the HTTP server
const server = createServer(async (req: IncomingMessage, res) => {
  try {
    const honoResponse = await app.fetch(req as any); // Ensure proper typing here
    
    // Set response status
    res.statusCode = honoResponse.status;

    // Set response headers
    honoResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Handle response body
    const body = await honoResponse.text(); // Get the response body as text
    res.end(body); // End the response with the body content
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Server Error:', error.message);
      res.statusCode = 500;
      res.end(`Server Error: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
      res.statusCode = 500;
      res.end('Server Error: An unexpected error occurred.');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
