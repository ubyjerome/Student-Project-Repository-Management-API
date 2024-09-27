import { NextFunction, Request, Response, RequestHandler } from "express";
import { bearerExtractor } from "../utils/bearerExtractor";
import logger from "../utils/logger";
import serverResponse from "../utils/serverResponse";
import AdminService from "../modules/admins/admins.service";

const Admin = new AdminService()

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await bearerExtractor(req)
        
        if (data.success == false) {
            serverResponse.handleError(req, res, "unauthorized", "Token Expired, Please Login")
            return
        }
        const adminId = data.decoded._id
        const admin = await Admin.fetchAdminById(adminId)
        if(admin == null){
            serverResponse.handleError(req, res, "unauthorized","Request Can Only Be Made By an Admin")
            return
        }
        next()
    } catch (error) {
        console.log(Error)
        logger.error("Admin Validation Failed")
    }
}

export const isSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await bearerExtractor(req)
        if (data.success == false) {
            serverResponse.handleError(req, res, "unauthorized", "Token Expired")
            return
        }
        const adminId = data.decoded._id
        const admin = await Admin.fetchAdminById(adminId)
        if(admin == null){
            serverResponse.handleError(req, res, "unauthorized","Request Can Only Be Made By an Admin")
            return
        }
        if(admin.elevated == false){
            serverResponse.handleError(req, res, "unauthorized","Must be A Superadmin to Perform Operation")
            return
        }
        next()
    } catch (error) {
        console.log(Error)
        logger.error("Admin Validation Failed")
    }
}