# ConversationSummary API proxy.

This is an MVC based implementation of proxy passthrough for conversations API.

## MVC Explanation

Models: BaseModel <--- (User, Conversation ) Model
Controllers: BaseController <--- (User, Conversation) Controller
Views: UserConversation View.

--

Service: Fetch Service, Cache Services.

## Run the project

1. Clone Repository:

   ```
   git clone https://github.com/azimiester/ConvoMVC.git
   ```

2. Install all dependencies using npm:

   ```
   npm install
   ```

3. Run the project:

   ```
   npm start
   ```

4. For Testing:
   ```
   npm run test
   ```

## TODOs:

- Add Unit tests for controllers, especially the conversation controller.
- Add Unit tests for Fetch Service
- Fix Add Unit tests for Cache Service
- Implement Exponential BackOff for Fetch Service.
- Implement API throttle for Fetch Service if there is an API limit.
- Refactor Code where todo commented.