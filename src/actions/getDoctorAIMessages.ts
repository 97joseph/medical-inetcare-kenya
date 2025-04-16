// src/actions/getDoctorAIMessages.ts
import { Action, api } from "actionhero";

export class GetDoctorAIMessages extends Action {
  constructor() {
    super();
    this.name = "getDoctorAIMessages";
    this.description = "Retrieve stored conversation messages for a DoctorAI session (gets random session if none specified)";
    this.inputs = {}; // No inputs required
  }

  async run() {
    try {
      // Get all session keys
      const sessionKeys = await api.redis.clients.client.keys('doctorai:session:*');
      
      if (sessionKeys.length === 0) {
        return { 
          message: "No active sessions found",
          sessionsAvailable: 0
        };
      }

      // Get a random session
      const randomKey = sessionKeys[Math.floor(Math.random() * sessionKeys.length)];
      const sessionId = randomKey.replace('doctorai:session:', '');
      const sessionData = await api.redis.clients.client.get(randomKey);

      return {
        message: "Retrieved random session",
        sessionId,
        messages: sessionData ? JSON.parse(sessionData) : [],
        expiresIn: await api.redis.clients.client.ttl(randomKey),
        totalSessionsAvailable: sessionKeys.length
      };
    } catch (error: any) {
      return { 
        error: error.message,
        details: "Failed to retrieve messages"
      };
    }
  }
}