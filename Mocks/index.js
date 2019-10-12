export const MOCKS = {
  "/conversations": [{ id: "2", with_user_id: "3", unread_message_count: 0 }]
};
export const MOCK_RESPONSE = [
  {
    id: "1",
    latest_message: {
      id: "1",
      body: "Moi!",
      from_user: {
        id: "1",
        avatar_url: "http://placekitten.com/g/300/300"
      },
      created_at: "2016-08-25T10:15:00.670Z"
    }
  },
  {
    id: "2",
    latest_message: {
      id: "2",
      body: "Hello!",
      from_user: {
        id: "3",
        avatar_url: "http://placekitten.com/g/302/302"
      },
      created_at: "2016-08-24T10:15:00.670Z"
    }
  },
  {
    id: "3",
    latest_message: {
      id: "3",
      body: "Hi!",
      from_user: {
        id: "1",
        avatar_url: "http://placekitten.com/g/300/300"
      },
      created_at: "2016-08-23T10:15:00.670Z"
    }
  },
  {
    id: "4",
    latest_message: {
      id: "4",
      body: "Morning!",
      from_user: {
        id: "5",
        avatar_url: "http://placekitten.com/g/304/304"
      },
      created_at: "2016-08-22T10:15:00.670Z"
    }
  },
  {
    id: "5",
    latest_message: {
      id: "5",
      body: "Pleep!",
      from_user: {
        id: "6",
        avatar_url: "http://placekitten.com/g/305/305"
      },
      created_at: "2016-08-21T10:15:00.670Z"
    }
  }
];
