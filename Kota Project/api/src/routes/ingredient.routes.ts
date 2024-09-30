import { Hono }  from 'hono';
import { addItemController } from "../controllers/ingredient.controller";
import { validateIngredientSchemaMiddleware } from "../middlewares/ingredient.middleware";

const addItemRoutes = new Hono();

addItemRoutes.post('/items', validateIngredientSchemaMiddleware, addItemController); //add new item

export { addItemRoutes };



