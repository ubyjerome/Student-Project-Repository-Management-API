const responseType = require("../../utils/serverResponse");
import { Request, Response } from "express";

class Admin {
  async createAccount(req: Request, res: Response) {
    responseType.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin Account Creation Route is defined"
    );
  }
  login(req: Request, res: Response) {
    responseType.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin Login Route is defined"
    );
  }
  forgotPassword(req: Request, res: Response) {
    responseType.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin Forgotten Password Route is defined"
    );
  }
  changePassword(req: Request, res: Response) {
    responseType.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin password Change Route is defined"
    );
  }
  resetPassword(req: Request, res: Response) {
    responseType.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin Password Reset Route is defined"
    );
  }
  verifyEmail(req: Request, res: Response) {
    responseType.handleResponse(
      req,
      res,
      {},
      "success",
      "Admin Email Verification Route is defined"
    );
  }
}

export = new Admin();
