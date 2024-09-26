import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import AdminService from "./admins.service";

class Admin {
  public service = new AdminService()
  async createAccount(req: Request, res: Response) {
    try {
      const admin = await this.service.createNewAdmin(req.body)
      if (admin == null) {
        serverResponse.handleError(
          req,
          res,
          "internalServerError",
          "An Error Occured!"
        );
        return
      }
      serverResponse.handleResponse(
        req,
        res,
        admin,
        "success",
        "Admin Created Sucessfully"
      );
    } catch (error) {
      console.log(error);
      serverResponse.handleError(
        req,
        res,
        "internalServerError", 
        "An Error Occured!"
      );
    }
  }
}

export default Admin;
