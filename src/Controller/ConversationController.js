import { BaseController } from "./BaseController";

export class ConversationController extends BaseController {
  constructor(conversationModel) {
    super();

    if (!conversationModel) {
      throw "can't initialize controller without a Model";
    }
    this.conversationModel = conversationModel;
  }
  async getCurrentUserConversation() {
    // Ideally this sends an API Key which determines which is the current user.
    return await this.conversationModel.fetchConversations();
  }

  async getLatestMsg(conversationId) {
    const msgs = await this.getConversatioById(conversationId);

    if (msgs.length === 0) return {};

    // Return the first message of the sorted array i-e latest message
    return this.sortByDate(msgs)[0];
  }
  async getConversatioById(conversationId) {
    return await this.conversationModel.fetchMessages(conversationId);
  }
  // can do a generic sort function that receives a key and sort by that key.
  sortByDate(conversations) {
    return conversations.sort((a, b) => {
      if (a.created_at < b.created_at) {
        return 1;
      }
      if (a.created_at > b.created_at) {
        return -1;
      }
      return 0;
    });
  }
}
