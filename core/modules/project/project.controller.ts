import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import ProjectService from "./project.service";

class Project {
    public service = new ProjectService()

    async createProject(req: Request, res: Response) {
        const response = await this.service.createNew(req.body)
        try {
            serverResponse.handleResponse(
                req,
                res,
                response,
                "success",
                "Project Created Sucessfully"
            );
        } catch (error) {
            serverResponse.handleError(
                req,
                res,
                "internalServerError"
            );
            console.log(error);
            throw error
        }
    }
}

export default Project;
