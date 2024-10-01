import { Hono }  from 'hono';
import { addItemController, updateItemController, deleteItemController, getItemsController } from "../controllers/ingredient.controller";
import { validateIngredientSchemaMiddleware } from "../middlewares/ingredient.middleware";

const ingredient = new Hono();
ingredient.get('/items', getItemsController);         // Fetch all items
ingredient.post('/addItem/items', addItemController); // Add new item
ingredient.put('/updateItem/items', updateItemController); // Update item
ingredient.delete('/deleteItem/items', deleteItemController); 



export { ingredient };



