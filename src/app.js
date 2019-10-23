import { SimpleCacheService } from "./Service/CacheService";
import { FetchService, MockFetchSerice } from "./Service/FetchService";

import { UserModel } from "./Model/UserModel";
import { ConversationModel } from "./Model/ConversationModel";

import { UserController } from "./Controller/UserController";
import { ConversationController } from "./Controller/ConversationController";

import { UserConversationView } from "./View/UserConversationView";

require("dotenv").config();

const isTest = process.env.ENVIRONMENT == "test";

const cacheService = new SimpleCacheService();
const fetchService = isTest
  ? new MockFetchSerice(process.env.API_BASE_URL)
  : new FetchService(process.env.API_BASE_URL);

const userModel = new UserModel(cacheService, fetchService);
const conversationModel = new ConversationModel(cacheService, fetchService);

const conversation = new ConversationController(conversationModel);
const user = new UserController(userModel);
const conversationsView = new UserConversationView(conversation, user);

export const getRecentConversationSummaries = async () => {
  return await conversationsView.getRecentConversationSummaries();
};
