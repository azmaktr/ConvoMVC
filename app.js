import { SimpleCacheService } from "./Services/CacheService";
import { FetchService, MockFetchSerice } from "./Services/FetchService";

import { UserModel } from "./Model/UserModel";
import { ConversationModel } from "./Model/ConversationModel";

import { UserController } from "./Controller/UserController";
import { ConversationController } from "./Controller/ConversationController";

import { UserConversationView } from "./View/UserConversationView";

import { API_BASE_URL } from "./statics";

const getRecentConversationSummaries = async () => {
  const isTest = false;
  const cacheService = new SimpleCacheService();
  const fetchService = isTest
    ? new MockFetchSerice(API_BASE_URL)
    : new FetchService(API_BASE_URL);

  const userModel = new UserModel(cacheService, fetchService);
  const conversationModel = new ConversationModel(cacheService, fetchService);

  const conversation = new ConversationController(conversationModel);
  const user = new UserController(userModel);

  const conversationsView = new UserConversationView(conversation, user);
  return await conversationsView.getRecentConversationSummaries();
};

getRecentConversationSummaries()
  .then(console.log)
  .catch(console.error);
