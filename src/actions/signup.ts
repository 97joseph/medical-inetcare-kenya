import { Action, ParamsFrom, api } from "actionhero";
import { User } from "../models/User";
import * as bcrypt from "bcrypt";

export class Signup extends Action {
  constructor() {
    super();
    this.name = "signup";
    this.description = "Signup a new user";
    this.inputs = {
      email: { required: true },
      password: { required: true },
    };
  }

  async run({ params }: { params: ParamsFrom<Signup> }) {
    const { email, password } = params;

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user - fixed to match User interface
      const newUser: User = {
        email,
        passwordHash: hashedPassword,// Just use password field to match interface
      };

      // Store the user in Redis
      await api.redis.clients.client.set(
        `user:${email}`,
        JSON.stringify(newUser),
        "EX",
        3600
      );

      return { message: "Signup successful!" };
    } catch (error) {
      api.log("Error during signup:", error);
      return {
        error: "Signup failed. Please try again.",
        details: (error as Error).message,
      };
    }
  }
}