export class MockFetchSerice {
  async get(endPoint, retries = 3, retryAfter = 100) {
    if (!MOCKS[endpoint]) {
      throw `Please add mock response for ${endpoint}`;
    }
    return Promise.resolve(MOCKS[endpoint]);
  }
}

export class FetchService {
  constructor(baseURL) {
    if (!baseURL) {
      throw "Must provide a Base URL";
    }
    this.baseURL = baseURL;
    // This should be injected too.
    this.fetch = window.fetch.bind(window);
  }
  async get(endPoint, retries = 3, retryAfter = 100) {
    const url = this.baseURL + endPoint;
    try {
      const request = await this.fetch(url);
      const json = await request.json();
      return json;
    } catch (err) {}
  }
}
