import Joi from "joi"; //used for data validation
import { HTTPException } from "hono/http-exception";

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

//validation for user schema
const validateUserSchemaMiddleware = async (c: any, next: any) => {
  try {
    const { error, value } = await userSchema.validate(await c.req.json());
 
    if (error) {
      throw new HTTPException(400, { message: "Invalid Request Payload" });
    }

    await next();
  } catch (error) {
    throw error;
  }
};

export { validateUserSchemaMiddleware };
