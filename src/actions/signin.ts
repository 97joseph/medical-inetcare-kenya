import { Action, ParamsFrom, api } from "actionhero";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { User } from "../models/User";

export class Signin extends Action {
  constructor() {
    super();
    this.name = "signin";
    this.description = "Sign in an existing user";
    this.inputs = {
      email: { required: true },
      password: { required: true },
    };
  }

  async run({ params }: { params: ParamsFrom<Signin> }) {
    const { email, password } = params;

    try {
      const redisKey = `user:${email}`;
      const userString = await api.redis.clients.client.get(redisKey);

      if (!userString) return { error: "User not found" };

      const user: User = JSON.parse(userString);

      const passwordMatch = await bcrypt.compare(password, user.passwordHash);

      if (passwordMatch) {
        if (!process.env.JWT_SECRET) {
          throw new Error("JWT_SECRET environment variable is not set");
        }
        
        const jwtToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
          expiresIn: "1h", // Token expires in 1 hour
        });

        return { message: "Sign in successful", token: jwtToken };
      } else {
        return { error: "Invalid email or password" };
      }
    } catch (err) {
      return { error: `Error during sign in: ${(err as Error).message}` };
    }
  }
}