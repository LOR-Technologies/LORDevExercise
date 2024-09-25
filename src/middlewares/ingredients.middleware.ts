import Joi from "joi"; //used for data validation
import { HTTPException } from "hono/http-exception";

const ingredientsSchema = Joi.object({
    name: Joi.string().required(),
    mass: Joi.number(),
    quantity: Joi.number(),
    price: Joi.number()

})

//