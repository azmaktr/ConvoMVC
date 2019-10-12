import fetch from "node-fetch";
import { MOCKS } from "../Mocks";

export class MockFetchSerice {
  async get(endPoint) {
    const resp = MOCKS[endPoint];
    if (!resp) {
      throw `Please add mock response for ${endPoint}`;
    }
    return Promise.resolve(resp);
  }
}

export class FetchService {
  constructor(baseURL) {
    if (!baseURL) {
      throw "Must provide a Base URL";
    }
    this.baseURL = baseURL;
    // This should be injected too.
    this.fetch = fetch;
  }
  async get(endPoint, retries = 3, retryAfter = 100) {
    const url = this.baseURL + endPoint;
    const request = await this.fetch(url);
    const json = await request.json();
    return json;
  }
}
