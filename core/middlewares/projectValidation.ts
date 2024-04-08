import { NextFunction, Request, Response, RequestHandler } from "express";
import Project from "../modules/project/project.repo"
import serverResponse from "../utils/serverResponse"

export async function validateProject(req: Request, res: Response, next: NextFunction) {
    const projectRepo = new Project()
        let projectId = req.params.projectId

        try {
            let projectFound = await projectRepo.getProjectById(projectId)

            if (projectFound == null || projectFound == undefined || !projectFound) {
                serverResponse.handleError(req, res, "notFound", "Project does not exist")
                return
            } 

            if(projectFound.isDeleted == true){
                serverResponse.handleError(req, res, "methodNotAllowed", "Project has been deleted")
                return
            }
            
            next()
        } catch (error) {
            serverResponse.handleError(req, res, "internalServerError")
            console.log(error);
            
        }
}