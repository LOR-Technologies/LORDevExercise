import Hono  from 'hono';
import { addItemController } from "../controllers/addItem.controller";
import { validateIngredientSchemaMiddleware } from "../middlewares/user.middleware";

const addItemRoutes = new Hono();

addItemRoutes.post('/items', validateIngredientSchemaMiddleware, addItemController); //add new item

export { addItemRoutes };



