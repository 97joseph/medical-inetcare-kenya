// src/models/Chat.ts
export default class Chat {
    message: string;
    response: string;
  
    constructor(message: string, response: string) {
      this.message = message;
      this.response = response;
    }
  }