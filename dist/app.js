/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Controller/BaseController.js":
/*!**************************************!*\
  !*** ./Controller/BaseController.js ***!
  \**************************************/
/*! exports provided: BaseController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseController\", function() { return BaseController; });\nclass BaseController {\n  constructor() {\n    if (new.target === BaseController) {\n      throw new Error(\"Cannot construct Abstract instances directly\");\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./Controller/BaseController.js?");

/***/ }),

/***/ "./Controller/ConversationController.js":
/*!**********************************************!*\
  !*** ./Controller/ConversationController.js ***!
  \**********************************************/
/*! exports provided: ConversationController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConversationController\", function() { return ConversationController; });\n/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ \"./Controller/BaseController.js\");\n\nclass ConversationController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__[\"BaseController\"] {\n  constructor(conversationModel) {\n    super();\n\n    if (!conversationModel) {\n      throw \"can't initialize controller without a Model\";\n    }\n\n    this.conversationModel = conversationModel;\n  }\n\n  async getCurrentUserConversation() {\n    // Ideally this sends an API Key which determines which is the current user.\n    return await this.conversationModel.fetchConversations();\n  }\n\n  async getLatestMsg(conversationId) {\n    const msgs = await this.getConversatioById(conversationId); // TODO: Find the latest message.\n  }\n\n  async getConversatioById(conversationId) {\n    return await this.conversationModel.fetchMessages(conversationId);\n  } // can do a generic sort function that receives a key and sort by that key.\n\n\n  sortByDate(conversations) {\n    return conversations;\n  }\n\n}\n\n//# sourceURL=webpack:///./Controller/ConversationController.js?");

/***/ }),

/***/ "./Controller/UserController.js":
/*!**************************************!*\
  !*** ./Controller/UserController.js ***!
  \**************************************/
/*! exports provided: UserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserController\", function() { return UserController; });\n/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ \"./Controller/BaseController.js\");\n\nclass UserController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__[\"BaseController\"] {\n  constructor(userModel) {\n    super();\n\n    if (!userModel) {\n      throw \"can't initialize controller without a Model\";\n    }\n\n    this.userModel = userModel;\n  }\n\n  async getUserDetails(userID) {\n    if (!userID) {\n      throw \"Invalid UserID\";\n    }\n\n    return await this.userModel.fetchUser(userID, true);\n  }\n\n}\n\n//# sourceURL=webpack:///./Controller/UserController.js?");

/***/ }),

/***/ "./MOCKS/index.js":
/*!************************!*\
  !*** ./MOCKS/index.js ***!
  \************************/
/*! exports provided: MOCKS, MOCK_RESPONSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOCKS\", function() { return MOCKS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOCK_RESPONSE\", function() { return MOCK_RESPONSE; });\nconst MOCKS = {\n  \"/conversations\": [{\n    id: \"2\",\n    with_user_id: \"3\",\n    unread_message_count: 0\n  }]\n};\nconst MOCK_RESPONSE = [{\n  id: \"1\",\n  latest_message: {\n    id: \"1\",\n    body: \"Moi!\",\n    from_user: {\n      id: \"1\",\n      avatar_url: \"http://placekitten.com/g/300/300\"\n    },\n    created_at: \"2016-08-25T10:15:00.670Z\"\n  }\n}, {\n  id: \"2\",\n  latest_message: {\n    id: \"2\",\n    body: \"Hello!\",\n    from_user: {\n      id: \"3\",\n      avatar_url: \"http://placekitten.com/g/302/302\"\n    },\n    created_at: \"2016-08-24T10:15:00.670Z\"\n  }\n}, {\n  id: \"3\",\n  latest_message: {\n    id: \"3\",\n    body: \"Hi!\",\n    from_user: {\n      id: \"1\",\n      avatar_url: \"http://placekitten.com/g/300/300\"\n    },\n    created_at: \"2016-08-23T10:15:00.670Z\"\n  }\n}, {\n  id: \"4\",\n  latest_message: {\n    id: \"4\",\n    body: \"Morning!\",\n    from_user: {\n      id: \"5\",\n      avatar_url: \"http://placekitten.com/g/304/304\"\n    },\n    created_at: \"2016-08-22T10:15:00.670Z\"\n  }\n}, {\n  id: \"5\",\n  latest_message: {\n    id: \"5\",\n    body: \"Pleep!\",\n    from_user: {\n      id: \"6\",\n      avatar_url: \"http://placekitten.com/g/305/305\"\n    },\n    created_at: \"2016-08-21T10:15:00.670Z\"\n  }\n}];\n\n//# sourceURL=webpack:///./MOCKS/index.js?");

/***/ }),

/***/ "./Model/BaseModel.js":
/*!****************************!*\
  !*** ./Model/BaseModel.js ***!
  \****************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseModel\", function() { return BaseModel; });\nclass BaseModel {\n  constructor(cacheService, fetchService) {\n    if (new.target === BaseModel) {\n      throw new Error(\"Cannot construct Abstract instances directly\");\n    }\n\n    this.fetch = fetchService;\n    this.cacheService = cacheService;\n  }\n\n  async get(endpoint, retries, tryCache = false) {\n    if (!endpoint) {\n      throw \"Endpoint must be defined\";\n    }\n\n    if (!tryCache) {\n      return await this.fetch.get(endpoint, retries);\n    } // Should use a more clever method for creating signature on production rather than using endpoint, will work here..\n\n\n    return await this.cacheService.get(endpoint, this.fetch.get.bind(endpoint, retries));\n  }\n\n}\n\n//# sourceURL=webpack:///./Model/BaseModel.js?");

/***/ }),

/***/ "./Model/ConversationModel.js":
/*!************************************!*\
  !*** ./Model/ConversationModel.js ***!
  \************************************/
/*! exports provided: ConversationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConversationModel\", function() { return ConversationModel; });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"./Model/BaseModel.js\");\n/* harmony import */ var _statics___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../statics/ */ \"./statics/index.js\");\n\n\nclass ConversationModel extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__[\"BaseModel\"] {\n  async fetchConversations(tryCache = false) {\n    return await this.get(_statics___WEBPACK_IMPORTED_MODULE_1__[\"ENDPOINTS\"].conversations(), 3, tryCache);\n  }\n\n  async fetchMessages(conversationID, tryCache = false) {\n    return await this.get(_statics___WEBPACK_IMPORTED_MODULE_1__[\"ENDPOINTS\"].messages(conversationID), 3, tryCache);\n  }\n\n}\n\n//# sourceURL=webpack:///./Model/ConversationModel.js?");

/***/ }),

/***/ "./Model/UserModel.js":
/*!****************************!*\
  !*** ./Model/UserModel.js ***!
  \****************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserModel\", function() { return UserModel; });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"./Model/BaseModel.js\");\n/* harmony import */ var _statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../statics */ \"./statics/index.js\");\n\n\nclass UserModel extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__[\"BaseModel\"] {\n  async fetchUser(userID, tryCache = false) {\n    return await this.get(_statics__WEBPACK_IMPORTED_MODULE_1__[\"ENDPOINTS\"].user(userId), 3, true);\n  }\n\n}\n\n//# sourceURL=webpack:///./Model/UserModel.js?");

/***/ }),

/***/ "./Services/CacheService.js":
/*!**********************************!*\
  !*** ./Services/CacheService.js ***!
  \**********************************/
/*! exports provided: SimpleCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleCacheService\", function() { return SimpleCacheService; });\n// This is simple because it doesn't a TTL, and a lot of other things.\nclass SimpleCacheService {\n  constructor() {\n    // This could be injected which implements an interface so its easy to change from dictionary to redis or something else.\n    this.cacheDictionary = {};\n  }\n\n  async get(key, callBack) {\n    if (!key || !typeof key === \"string\") {\n      throw \"Invalid Key\";\n    }\n\n    const value = this.cacheDictionary[key];\n\n    if (!!!value) {\n      return value;\n    }\n\n    const result = await callBack();\n    this.cacheDictionary[key] = result;\n    return result;\n  }\n\n  flush() {\n    this.cacheDictionary = {};\n  }\n\n  delete(key) {\n    if (!key || !typeof key === \"string\") {\n      throw \"Invalid Key\";\n    }\n\n    delete this.cacheDictionary[key];\n    return true;\n  }\n\n}\n\n//# sourceURL=webpack:///./Services/CacheService.js?");

/***/ }),

/***/ "./Services/FetchService.js":
/*!**********************************!*\
  !*** ./Services/FetchService.js ***!
  \**********************************/
/*! exports provided: MockFetchSerice, FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MockFetchSerice\", function() { return MockFetchSerice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchService\", function() { return FetchService; });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MOCKS___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MOCKS/ */ \"./MOCKS/index.js\");\n\n\nclass MockFetchSerice {\n  async get(endPoint) {\n    const resp = _MOCKS___WEBPACK_IMPORTED_MODULE_1__[\"MOCKS\"][endPoint];\n\n    if (!resp) {\n      throw `Please add mock response for ${endPoint}`;\n    }\n\n    return Promise.resolve(resp);\n  }\n\n}\nclass FetchService {\n  constructor(baseURL) {\n    if (!baseURL) {\n      throw \"Must provide a Base URL\";\n    }\n\n    this.baseURL = baseURL; // This should be injected too.\n\n    this.fetch = node_fetch__WEBPACK_IMPORTED_MODULE_0___default.a;\n  }\n\n  async get(endPoint, retries = 3, retryAfter = 100) {\n    const url = this.baseURL + endPoint;\n    const request = await this.fetch(url);\n    const json = await request.json();\n    return json;\n  }\n\n}\n\n//# sourceURL=webpack:///./Services/FetchService.js?");

/***/ }),

/***/ "./View/UserConversationView.js":
/*!**************************************!*\
  !*** ./View/UserConversationView.js ***!
  \**************************************/
/*! exports provided: UserConversationView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserConversationView\", function() { return UserConversationView; });\nclass UserConversationView {\n  constructor(conversationController, userController) {\n    this.conversationController = conversationController;\n    this.userController = userController;\n  }\n\n  async mapConversationsWithMsgs(conversation) {\n    const msg = await this.conversationController.getLatestMsg(conversation.id);\n    return { ...conversation,\n      msg\n    };\n  }\n\n  async getRecentConversationSummaries() {\n    const rc = await this.conversationController.getCurrentUserConversation();\n    const fc = rc.filter(rc => rc.id && rc.with_user_id);\n    const cMsgs = await Promise.all(fc.map(c => this.mapConversationsWithMsgs(c))); //const conversations\n\n    return cMsgs; // TODO: Map users, sort and send.\n  }\n\n}\n\n//# sourceURL=webpack:///./View/UserConversationView.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Services_CacheService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/CacheService */ \"./Services/CacheService.js\");\n/* harmony import */ var _Services_FetchService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/FetchService */ \"./Services/FetchService.js\");\n/* harmony import */ var _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model/UserModel */ \"./Model/UserModel.js\");\n/* harmony import */ var _Model_ConversationModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model/ConversationModel */ \"./Model/ConversationModel.js\");\n/* harmony import */ var _Controller_UserController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controller/UserController */ \"./Controller/UserController.js\");\n/* harmony import */ var _Controller_ConversationController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controller/ConversationController */ \"./Controller/ConversationController.js\");\n/* harmony import */ var _View_UserConversationView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View/UserConversationView */ \"./View/UserConversationView.js\");\n/* harmony import */ var _statics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statics */ \"./statics/index.js\");\n\n\n\n\n\n\n\n\n\nconst getRecentConversationSummaries = async () => {\n  const isTest = true;\n  const cacheService = new _Services_CacheService__WEBPACK_IMPORTED_MODULE_0__[\"SimpleCacheService\"]();\n  const fetchService = isTest ? new _Services_FetchService__WEBPACK_IMPORTED_MODULE_1__[\"MockFetchSerice\"](_statics__WEBPACK_IMPORTED_MODULE_7__[\"API_BASE_URL\"]) : new _Services_FetchService__WEBPACK_IMPORTED_MODULE_1__[\"FetchService\"](_statics__WEBPACK_IMPORTED_MODULE_7__[\"API_BASE_URL\"]);\n  const userModel = new _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__[\"UserModel\"](cacheService, fetchService);\n  const conversationModel = new _Model_ConversationModel__WEBPACK_IMPORTED_MODULE_3__[\"ConversationModel\"](cacheService, fetchService);\n  const conversation = new _Controller_ConversationController__WEBPACK_IMPORTED_MODULE_5__[\"ConversationController\"](conversationModel);\n  const user = new _Controller_UserController__WEBPACK_IMPORTED_MODULE_4__[\"UserController\"](userModel);\n  const conversationsView = new _View_UserConversationView__WEBPACK_IMPORTED_MODULE_6__[\"UserConversationView\"](conversation, user);\n  return await conversationsView.getRecentConversationSummaries();\n};\n\ntry {\n  console.log(getRecentConversationSummaries());\n} catch (err) {\n  console.err(err);\n}\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./statics/index.js":
/*!**************************!*\
  !*** ./statics/index.js ***!
  \**************************/
/*! exports provided: API_BASE_URL, ENDPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_BASE_URL\", function() { return API_BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENDPOINTS\", function() { return ENDPOINTS; });\nconst API_BASE_URL = \"http://ui-developer-backend.herokuapp.com/api\";\nconst ENDPOINTS = {\n  conversations: () => `/conversations`,\n  messages: conversationID => `/conversations/${conversationID}/messages`,\n  user: userID => `/users/${userID}`\n};\n\n//# sourceURL=webpack:///./statics/index.js?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ })

/******/ });