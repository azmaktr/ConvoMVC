export class BaseController {
  constructor() {
    if (new.target === BaseController) {
      throw new Error("Cannot construct Abstract instances directly");
    }
  }
}
