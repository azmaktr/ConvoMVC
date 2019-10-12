import { BaseController } from "./BaseController";
export class UserController extends BaseController {
  constructor(userModel) {
    super();
    if (!userModel) {
      throw "can't initialize controller without a Model";
    }
    this.userModel = userModel;
  }
  async getUserDetails(userID) {
    if (!userID) {
      throw "Invalid UserID";
    }
    return await this.userModel.fetchUser(userID, true);
  }
}
