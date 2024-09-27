import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';  // Adapt based on your database

export const foodItemsTable = pgTable('food_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
});
