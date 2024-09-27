import Joi from "joi";
import { Context, Next } from 'hono';
import { HTTPException } from "hono/http-exception";

const ingredientsSchema = Joi.object({
  name: Joi.string().required(),
  mass: Joi.number().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});

// Middleware to validate the ingredient data and token
const validateIngredientSchemaMiddleware = async (c: Context, next: Next) => {
  const token = c.req.header('Authorization');

  // Check for authorization token
  if (!token) {
    return c.json({ message: 'Unauthorized' }, 401);
  }

  // Validate the request body against the ingredients schema
  try {
    const body = await c.req.json();
    const { error } = ingredientsSchema.validate(body, { abortEarly: false });

    if (error) {
      // If validation fails, respond with validation error messages
      return c.json({ message: 'Validation error', details: error.details }, 400);
    }

    // Proceed to next handler if validation passes
    await next();
  } catch (err) {
    // Handling other errorst
    throw new HTTPException(400, { message: 'Invalid request body' });
  }
};

export { validateIngredientSchemaMiddleware };
