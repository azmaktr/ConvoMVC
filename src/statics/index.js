export const ENDPOINTS = {
  conversations: () => `/conversations`,
  messages: conversationID => `/conversations/${conversationID}/messages`,
  user: userID => `/users/${userID}`
};
