import { pgTable, text, integer } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';


const client = new Client({
  connectionString: 'postgresql://admin:KpM6wT7B8x1Icb1ELmFHYk8gKZCCLR2V@dpg-crkjfnu8ii6s7380q5c0-a.frankfurt-postgres.render.com/nungo_rajd', // replace with the actual connection string provided
});

export const db = drizzle(client);

export const foodItemsTable = pgTable('food_items', {
  id: integer('id').primaryKey().notNull(),
  name: text('name').notNull(),
  quantity: integer('quantity').notNull(),
});
