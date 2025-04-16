// src/actions/getAllDoctorAISessions.ts
//test
import { Action, api } from "actionhero";

export class GetAllDoctorAISessions extends Action {
  constructor() {
    super();
    this.name = "getAllDoctorAISessions";
    this.description = "Retrieve all DoctorAI conversation sessions";
    this.inputs = {}; // No inputs required
  }

  async run() {
    try {
      // Get all session keys from Redis
      const sessionKeys = await api.redis.clients.client.keys('doctorai:session:*');
      
      // Return empty response if no sessions found
      if (sessionKeys.length === 0) {
        return {
          status: 'success',
          message: "No active sessions found",
          sessions: []
        };
      }

      // Retrieve all sessions in parallel
      const sessions = await Promise.all(
        sessionKeys.map(async (key) => {
          const sessionData = await api.redis.clients.client.get(key);
          return {
            sessionId: key.replace('doctorai:session:', ''),
            messages: sessionData ? JSON.parse(sessionData) : [],
            expiresIn: await api.redis.clients.client.ttl(key)
          };
        })
      );

      // Return all sessions with their messages
      return {
        status: 'success',
        message: `Retrieved ${sessions.length} sessions`,
        sessions: sessions
      };
    } catch (error: any) {
      return {
        status: 'error',
        error: "Failed to retrieve sessions",
        details: error.message
      };
    }
  }
}