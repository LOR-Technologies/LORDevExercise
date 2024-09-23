import { Hono } from "hono"
import { createUserController } from "../controllers/user.controller";
import { validateUserSchemaMiddleware } from "../middlewares/user.middleware";

const userRoutes = new Hono()

userRoutes.post('/create', validateUserSchemaMiddleware, createUserController) // create new user

export default userRoutes;