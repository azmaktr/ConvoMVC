export class UserConversationView {
  constructor(conversationController, userController) {
    this.conversationController = conversationController;
    this.userController = userController;
  }

  async mapConversationsWithMsgs(conversation) {
    if (!conversation.id) {
      throw "Conversation ID not found for conversation.";
    }
    const msg = await this.conversationController.getLatestMsg(conversation.id);

    return { id: conversation.id, latest_message: msg };
  }

  async mapUserWithMsg(conversationMessage) {
    if (
      !conversationMessage.latest_message ||
      !conversationMessage.latest_message.from_user_id
    ) {
      throw "User Id not found with conversation Message.";
    }
    const userId = conversationMessage.latest_message.from_user_id;
    const user = await this.userController.getUserDetails(userId);

    // TODO: Clean/Refactor this.
    if ("username" in user) {
      delete user.username;
    }
    if ("from_user_id" in conversationMessage.latest_message) {
      delete conversationMessage.latest_message.from_user_id;
    }
    conversationMessage["latest_message"]["from_user"] = user;
    return conversationMessage;
  }
  // TODO: Refactor sortByDate Method to be generic and use it here.
  sortByDate(conversations) {
    return conversations.sort((a, b) => {
      const dateA = new Date(a.latest_message.created_at);
      const dateB = new Date(b.latest_message.created_at);
      return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
    });
  }

  async getRecentConversationSummaries() {
    const rc = await this.conversationController.getCurrentUserConversation();
    const fc = rc.filter(rc => rc.id && rc.with_user_id);

    const cMsgs = await Promise.all(
      fc.map(c => this.mapConversationsWithMsgs(c))
    );

    const cUserMsgs = await Promise.all(cMsgs.map(c => this.mapUserWithMsg(c)));

    return this.sortByDate(cUserMsgs);
  }
}
