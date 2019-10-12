export const API_BASE_URL = "http://ui-developer-backend.herokuapp.com/api";

export const ENDPOINTS = {
  conversations: () => `/conversations`,
  messages: conversationID => `/conversations/${conversationID}/messages`,
  user: userID => `/users/${userID}`
};
