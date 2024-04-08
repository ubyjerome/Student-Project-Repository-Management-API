import { NextFunction, Request, Response, RequestHandler } from "express";
import Project from "../modules/project/project.repo"
import serverResponse from "../utils/serverResponse"
import { request } from "https"

export async function validateProject(req: Request, res: Response, next: NextFunction) {
    const projectRepo = new Project()
        let projectId = req.params.projectId

        try {
            let projectFound = await projectRepo.getProjectById(projectId)            
            if (projectFound == null || projectFound == undefined || !projectFound[0]) {
                serverResponse.handleError(req, res, "badRequest", "Project does not exist")
            } else {
                next();
            }
        } catch (error) {
            serverResponse.handleError(req, res, "internalServerError")
            console.log(error);
            
        }
}