import { getRecentConversationSummaries } from "./src/app";

getRecentConversationSummaries()
  .then(console.log)
  .catch(console.error);
