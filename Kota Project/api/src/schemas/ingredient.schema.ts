import { serial, text, integer, pgTable } from 'drizzle-orm/pg-core';


const ingredientTable = pgTable('ingredients', {
  id: serial('id').primaryKey(),
  name: text('name'),
  mass: integer('mass'),
  quantity: integer('quantity'),
  price: integer('price'),
});

export default ingredientTable;
