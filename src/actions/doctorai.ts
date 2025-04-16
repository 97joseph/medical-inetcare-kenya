import { Action, api } from "actionhero";
import OpenAI from "openai";
import { sampleVignettes } from "../corpus-data/corpus";
import { kenyaMedicalContext } from "../corpus-data/kenyastandards";

export class Doctorai extends Action {
  constructor() {
    super();
    this.name = "doctorai";
    this.description = "AI doctor";
    this.inputs = {
      message: { required: true },
      sessionId: { required: false }, // Optional session ID to maintain conversation history
    };
  }

  async run({ params }: { params: { message: string; sessionId?: string } }) {
    try {
      if (!params.message) {
        throw new Error("Message parameter is required");
      }

      const openai = new OpenAI({
        apiKey: "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",
      });

      // Define proper type for messages
      type ChatMessage = {
        role: 'system' | 'user' | 'assistant';
        content: string;
      };

      // Get previous messages if sessionId exists
      let previousMessages: ChatMessage[] = [];
      if (params.sessionId) {
        const sessionKey = `doctorai:session:${params.sessionId}`;
        const sessionData = await api.redis.clients.client.get(sessionKey);
        if (sessionData) {
          previousMessages = JSON.parse(sessionData);
        }
      }

      const systemMessage: ChatMessage = {
        role: "system",
        content: `You are a medical assistant in Kenya, capable of referencing Kenya's medical guidelines, common drugs, diagnostic limitations, and clinical scenarios. Always provide responses based on the context provided below. If a question cannot be answered from the context, clearly state that.

        Kenya Medical Guidelines: ${JSON.stringify(kenyaMedicalContext.guidelines)}
        Common Drugs in Kenya: ${JSON.stringify(kenyaMedicalContext.commonDrugs)}
        Diagnostic Limitations in Kenya: ${JSON.stringify(kenyaMedicalContext.diagnosticLimitations)}
        
        Here are some clinical scenarios from different regions and health facilities in Kenya:
        ${JSON.stringify(sampleVignettes)}
        
        Use this information to provide accurate and contextually relevant medical advice.`,
      };

      const userMessage: ChatMessage = {
        role: "user",
        content: params.message,
      };

      // Combine system message, previous messages, and current user message
      const messages: ChatMessage[] = [systemMessage, ...previousMessages, userMessage];

      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
      });

      const aiResponse = chatCompletion.choices[0].message.content;

      // Save the conversation to Redis if sessionId exists
      if (params.sessionId) {
        const sessionKey = `doctorai:session:${params.sessionId}`;
        const updatedMessages: ChatMessage[] = [
          ...previousMessages,
          userMessage,
          {
            role: "assistant",
            content: aiResponse,
          },
        ];
        
        // Save with 24h expiration (86400 seconds)
        await api.redis.clients.client.set(
          sessionKey,
          JSON.stringify(updatedMessages),
          "EX",
          86400
        );
      }

      return { 
        response: aiResponse,
        sessionId: params.sessionId || null,
      };
    } catch (error: any) {
      return { error: error.message };
    }
  }
}