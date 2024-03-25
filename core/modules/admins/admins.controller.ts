const responseType = require("../../utils/serverResponse");
import { Request,  Response} from "express";

class Admin {
  async createAccount(req: Request, res: Response) {
    responseType.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin Route is defined"
    );
  }
}

export = new Admin();
