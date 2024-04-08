import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import ProjectService from "./project.service";

class Project {
    public service = new ProjectService()
    async createProject(req: Request, res: Response) {
        try {
            serverResponse.handleResponse(
                req,
                res,
                req.body,
                "success",
                "Project Created Sucessfully"
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

export default Project;
