class UserConversationsView {
  constructor(conversationController, userController) {
    this.conversationController = conversationController;
    this.userController = userController;
  }

  async mapConversationsWithMsgs(conversation) {
    const msg = await this.conversationController.getLatestMsg(conversation.id);
    return { ...conversation, msg };
  }

  async getRecentConversationSummaries() {
    const rc = await this.conversationController.getCurrentUserConversation();
    const fc = rc.filter(rc => rc.id && rc.with_user_id);

    const cMsgs = await Promise.all(
      fc.map(c => this.mapConversationsWithMsgs(c))
    );
    //const conversations
    return cMsgs;
    // TODO: Map users, sort and send.
  }
}
