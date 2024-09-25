import { pgTable, serial, varchar } from "drizzle-orm/pg-core";


const ingredientTable = pgTable("ingredients", {
    id: serial("id").primaryKey(),
    name: varchar("name", {length: 256}),
    mass: varchar("mass", {length: 256}),
    quantity: varchar("quantity", {length: 256}),
    price: varchar("price", {length: 256}),

});


  
  export default ingredientTable;