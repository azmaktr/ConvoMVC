import { expect } from "chai";
import { getRecentConversationSummaries } from "./app";
import { MOCK_RESPONSE } from "./Mocks";

describe("App Integration Tests", () => {
  it("should match the mock responses", async () => {
    const response = await getRecentConversationSummaries();
    expect(response).to.deep.eql(MOCK_RESPONSE);
  });
});
