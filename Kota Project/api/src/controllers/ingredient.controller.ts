import { Context } from 'hono';
import db from '../config/db';
import ingredientTable from '../schemas/ingredient.schema';


const getItemsController = async (c: Context) => {
  try {
    const items = await db.select().from(ingredientTable);
    return c.json({ items });
  } catch (error) {
    return c.json({ message: 'Error fetching items' }, 500);
  }
};

const addItemController = async (c: Context) => {
  try {
    const body = await c.req.json();

    const { name, mass, quantity, price } = body;
    const newItem = await db
      .insert(ingredientTable)
      .values({ name, mass, quantity, price })
      .returning();

    return c.json({ message: 'Item added successfully', item: newItem }, 201);
  } catch (error) {
    console.error("Error:", error); // Log error details
    return c.json({ message: 'Item not added' }, 400);
  }
};


const updateItemController = async (c: Context) => {
  try {
    const id = c.req.param('id'); // Get the item ID from request parameters
    const body = await c.req.json();
    const { name, mass, quantity, price } = body;

    // Update the item in the database
    const updatedItem = await db
      .update(ingredientTable)
      .set({
        name,
        mass,
        quantity,
        price,
      })
      .where(ingredientTable.id.equals(id))
      .returning(); // Returns the updated row

    if (updatedItem.length === 0) {
      return c.json({ message: 'Item not found' }, 404);
    }

    return c.json({ message: 'Item updated successfully', item: updatedItem }, 200);
  } catch (error) {
    return c.json({ message: 'Item not updated' }, 400);
  }
};

const deleteItemController = async (c: Context) => {
  try {
    const id = c.req.param('id'); // Get the item ID from request parameters

    // Delete the item from the database
    const deletedItem = await db
      .delete(ingredientTable)
      .where(ingredientTable.id.equals(id))
      .returning(); // Returns the deleted row

    if (deletedItem.length === 0) {
      return c.json({ message: 'Item not found' }, 404);
    }

    return c.json({ message: 'Item deleted successfully', item: deletedItem }, 200);
  } catch (error) {
    return c.json({ message: 'Item not deleted' }, 400);
  }
};

export { getItemsController, addItemController, updateItemController, deleteItemController };
