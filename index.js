import { SimpleCacheService } from "./src/Services/CacheService";
import { FetchService, MockFetchSerice } from "./src/Services/FetchService";

import { UserModel } from "./src/Model/UserModel";
import { ConversationModel } from "./src/Model/ConversationModel";

import { UserController } from "./src/Controller/UserController";
import { ConversationController } from "./src/Controller/ConversationController";

import { UserConversationView } from "./src/View/UserConversationView";

import { API_BASE_URL } from "./src/statics";

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

const getRecentConversationSummaries = async () => {
  return await conversationsView.getRecentConversationSummaries();
};

getRecentConversationSummaries()
  .then(console.log)
  .catch(console.error);
