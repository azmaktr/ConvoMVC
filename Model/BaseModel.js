export class BaseModel {
  constructor(cacheService, fetchService) {
    if (new.target === BaseModel) {
      throw new Error("Cannot construct Abstract instances directly");
    }
    this.fetch = fetchService;
    this.cacheService = cacheService;
  }

  async get(endpoint, retries, tryCache = false) {
    if (!endpoint) {
      throw "Endpoint must be defined";
    }
    if (!tryCache) {
      return await this.fetch.get(endpoint, retries);
    }
    // Should use a more clever method for creating signature on production rather than using endpoint, will work here..
    return await this.cacheService.get(
      endpoint,
      this.fetch.get.bind(endpoint, retries)
    );
  }
}
