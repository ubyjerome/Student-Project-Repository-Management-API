import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import AdminService from "./admins.service";
import { log } from "console";

class Admin {
  public service = new AdminService()
  async createAccount(req: Request, res: Response) {
  try {
    await this.service.createNewAdmin(req.body)
    serverResponse.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin Created Sucessfully"
    );
  } catch (error) {
    console.log(error);
    serverResponse.handleError(
      req,
      res,
      "internalServerError"
    );
  }

}

login(req: Request, res: Response) {
  serverResponse.handleResponse(
    req,
    res,
    {},
    "success",
    "Admin Login Route is defined"
  );
}
forgotPassword(req: Request, res: Response) {
  serverResponse.handleResponse(
    req,
    res,
    {},
    "success",
    "Admin Forgotten Password Route is defined"
  );
}
changePassword(req: Request, res: Response) {
  serverResponse.handleResponse(
    req,
    res,
    {},
    "success",
    "Admin password Change Route is defined"
  );
}
resetPassword(req: Request, res: Response) {
  serverResponse.handleResponse(
    req,
    res,
    {},
    "success",
    "Admin Password Reset Route is defined"
  );
}
verifyEmail(req: Request, res: Response) {
  serverResponse.handleResponse(
    req,
    res,
    {},
    "success",
    "Admin Email Verification Route is defined"
  );
}
}

export default Admin;
