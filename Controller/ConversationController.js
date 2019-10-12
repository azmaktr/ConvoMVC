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
    // TODO: Find the latest message.
  }
  async getConversatioById(conversationId) {
    return await this.conversationModel.fetchMessages(conversationId);
  }
  // can do a generic sort function that receives a key and sort by that key.
  sortByDate(conversations) {
    return conversations;
  }
}
