import bcrypt from "bcrypt";
import usersTable from "../schemas/user.schema";
import db from "../config/db";
import { eq }  from 'drizzle-orm';

const loginUserController = async (c: any) => {
  try {
    const { email, password } = await c.req.json(); // Parse request body

    const userInBD = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);

    if (!userInBD) {
      return c.json({ message: 'Cannot find user' }, 400);
    }

    // Compare password with hashed password
    const isPasswordCorrect = await bcrypt.compare(password, userInBD[0].password as string);

    if (!isPasswordCorrect) {
      return c.json({ message: 'Unsuccessful login' });
    }

    //generate jwt

    return c.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    return c.json({ message: 'An error occurred during login' }, 500);
  }
};

const createUserController = async (c: any) => {
  try {
    const { name, email, password } = await c.req.json();
    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, saltRounds); //generate password hash

    //check if user already exists in db!!
    
    //save info in database table
    await db.insert(usersTable).values({
      name: name,
      email: email,
      password: passwordHash,
    });

    return c.json({ message: "User Created" });
  } catch (error) {
    throw error;
  }
};



export { createUserController, loginUserController };
