import { Hono }  from 'hono';
import { addItemController, updateItemController, deleteItemController, getItemsController } from "../controllers/ingredient.controller";
import { validateIngredientSchemaMiddleware } from "../middlewares/ingredient.middleware";

const ingredient = new Hono();
ingredient.get('/items', getItemsController);
ingredient.post('/addItem/items', validateIngredientSchemaMiddleware, addItemController);
ingredient.put('/updateItem/items', validateIngredientSchemaMiddleware,  updateItemController);
ingredient.delete('/deleteItem/items', deleteItemController); 



export { ingredient };



