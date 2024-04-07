import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import ProjectService from "./project.service";

class Admin {
    public service = new ProjectService()
    async createProject(req: Request, res: Response) {
        try {
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
}

export default Admin;
