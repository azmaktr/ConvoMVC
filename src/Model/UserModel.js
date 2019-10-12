import { BaseModel } from "./BaseModel";
import { ENDPOINTS } from "../statics";

export class UserModel extends BaseModel {
  async fetchUser(userID, tryCache = false) {
    return await this.get(ENDPOINTS.user(userId), 3, true);
  }
}
