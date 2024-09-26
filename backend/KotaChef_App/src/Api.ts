import { db } from './db'; // Import the Drizzle ORM database connection
import { users } from './Models'; // Import the 'users' model
// Fetch all users from the 'users' table
export const fetchAllUsers = async () => {
  const allUsers = await db.select().from(users); // Query to select all users
  return allUsers;
};

// Insert a new user into the 'users' table
export const insertUser = async (name: string, email: string) => {
  await db.insert(users).values({
    name: name,
    email: email,
  });
};
