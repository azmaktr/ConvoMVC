import { SimpleCacheService } from "./Services/CacheService";
import { FetchService, MockFetchSerice } from "./Services/FetchService";

import UserModel from "./Model/UserModel";
import ConversationModel from "./Model/ConversationModel";

import UserController from "./Controller/UserController";
import ConversationController from "./Controller/ConversationController";

const cacheService = new SimpleCacheService();
const fetchService = window.testingEnvironemnt
  ? new MockFetchSerice(API_BASE_URL)
  : new FetchService(API_BASE_URL);

const userModel = new UserModel(cacheService, fetchService);
const conversationModel = new ConversationModel(cacheService, fetchService);

const conversation = new ConversationController(conversationModel);
const user = new UserController(userModel);

conversationsView = new ConversationsView(conversation, user);
const result = await conversationsView.getRecentConversationSummaries();

console.log(result);
