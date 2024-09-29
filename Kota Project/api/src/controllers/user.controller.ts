import bcrypt from "bcrypt";
import usersTable from "../schemas/user.schema";
import db from "../config/db";

const createUserController = async (c: any) => {
  try {
    const { name, email, password } = await c.req.json();
    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, saltRounds); //generate password hash

    //check if user already exists in db
    
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

export { createUserController };
