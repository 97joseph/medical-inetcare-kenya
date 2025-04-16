// src/actions/getAllUsers.ts
import { Action, api } from "actionhero";
import { User } from "../models/User";

export class GetAllUsers extends Action {
  constructor() {
    super();
    this.name = "getAllUsers";
    this.description = "Retrieve all registered users";
    this.inputs = {}; // No inputs required
  }

  async run() {
    try {
      // Get all user keys from Redis
      const userKeys = await api.redis.clients.client.keys('user:*');
      
      if (userKeys.length === 0) {
        return {
          status: 'success',
          message: "No users found",
          users: []
        };
      }

      // Retrieve all users in parallel
      const users = await Promise.all(
        userKeys.map(async (key) => {
          const userData = await api.redis.clients.client.get(key);
          return JSON.parse(userData) as User;
        })
      );

      // Return users without password hashes for security
      const sanitizedUsers = users.map(user => ({
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }));

      return {
        status: 'success',
        message: `Retrieved ${users.length} users`,
        users: sanitizedUsers
      };
    } catch (error: any) {
      return {
        status: 'error',
        error: "Failed to retrieve users",
        details: error.message
      };
    }
  }
}