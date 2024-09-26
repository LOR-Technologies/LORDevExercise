import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

// Define the 'users' table model
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 100 }).unique(),
});
