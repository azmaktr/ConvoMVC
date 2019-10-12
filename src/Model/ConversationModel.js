import { BaseModel } from "./BaseModel";
import { ENDPOINTS } from "../statics";
export class ConversationModel extends BaseModel {
  async fetchConversations(tryCache = false) {
    return await this.get(ENDPOINTS.conversations(), 3, tryCache);
  }

  async fetchMessages(conversationID, tryCache = false) {
    return await this.get(ENDPOINTS.messages(conversationID), 3, tryCache);
  }
}
