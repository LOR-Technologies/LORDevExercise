import { Context } from 'hono';
import db from '../../db'; 
import ingredientTable from '../schemas/addItem.schema';

const addItemController = async (c: Context) => {
  try {
    const body = await c.req.json(); // Parse incoming JSON body

   
    const { name, mass, quantity, price } = body; //to add validation!

    // Insert new item into the db
    const newItem = await db
      .insert(ingredientTable)
      .values({
        name,
        mass,
        quantity,
        price,
      })
      .returning(); 

    return c.json({ message: 'Item added successfully', item: newItem }, 201);
  } catch (error) {
    // Error handling
    return c.json({ message: 'Item not added', }, 400);
  }
};

export { addItemController };
