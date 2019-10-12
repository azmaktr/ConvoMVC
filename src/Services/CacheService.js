// This is simple because it doesn't a TTL, and a lot of other things.
export class SimpleCacheService {
  constructor() {
    // This could be injected which implements an interface so its easy to change from dictionary to redis or something else.
    this.cacheDictionary = {};
  }
  async get(key, callBack) {
    if (!key || !typeof key === "string") {
      throw "Invalid Key";
    }

    const value = this.cacheDictionary[key];
    if (!!!value) {
      return value;
    }
    const result = await callBack();
    this.cacheDictionary[key] = result;
    return result;
  }
  flush() {
    this.cacheDictionary = {};
  }
  delete(key) {
    if (!key || !typeof key === "string") {
      throw "Invalid Key";
    }

    delete this.cacheDictionary[key];
    return true;
  }
}
