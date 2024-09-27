import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import ProjectService from "./project.service";
import { bearerExtractor } from "../../utils/bearerExtractor";
class Project {
    public service = new ProjectService()

    async createProject(req: Request, res: Response) {

        try {
            const bearerData = await bearerExtractor(req)
            if (bearerData.success == false) {
                serverResponse.handleError(req, res, "unauthorized", "Invalid Authorization Token")
                return
            }
            const adminId = bearerData.decoded._id
            const response = await this.service.createNew(req.body, adminId)
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

    async deleteProject(req: Request, res: Response) {
        let projectId = req.params.projectId
        try {
            await this.service.deleteOne(projectId)
            serverResponse.handleResponse(
                req,
                res,
                {},
                "success",
                "Project Deleted Sucessfully"
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

    async updateProject(req: Request, res: Response) {
        let update = req.body
        try {
            await this.service.updateOne(req.params.projectId, update)
            serverResponse.handleResponse(
                req,
                res,
                {},
                "success",
                "Project Updated Sucessfully"
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

    async getAllprojects(req: Request, res: Response) {
        const projects = await this.service.getAll()
        try {
            serverResponse.handleResponse(
                req,
                res,
                projects,
                "success",
                "Projects Retrieved Sucessfully"
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

    async getOneProject(req: Request, res: Response) {
        const projectFound = await this.service.getById(req.params.projectId)
        try {
            serverResponse.handleResponse(
                req,
                res,
                projectFound,
                "success",
                "Project Found Sucessfully"
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

    async getOneByTitle(req: Request, res: Response) {
        const projectTitle = req.params.title
        const projectFound = await this.service.getOneByTitle(projectTitle)

        if (!projectFound[0]) {
            serverResponse.handleResponse(
                req,
                res,
                projectFound,
                "notFound",
                "Project Not Found"
            );
            return
        }

        try {
            serverResponse.handleResponse(
                req,
                res,
                projectFound,
                "success",
                "Project Found Sucessfully"
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
