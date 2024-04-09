import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import FilterService from "./filter.service";

class Project {
    public service = new FilterService()
    decideReponse(req: Request, res: Response, data: any) {
        if (!data[0]) {
            serverResponse.handleResponse(
                req,
                res,
                {},
                "notFound",
                "No project matches the seach parameter"
            );
            return
        }
        serverResponse.handleResponse(
            req,
            res,
            data,
            "success",
            "Project(s) Found Sucessfully"
        );
    }

    async keywords(req: Request, res: Response) {
        const {keywords} = req.body
        try {
            const projects = await this.service.searchByKeywords(keywords)
            this.decideReponse(req, res, projects)
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
    async title(req: Request, res: Response) {
        const {title} = req.body
        try {
            const projects = await this.service.searchByTitle(title)
            this.decideReponse(req, res, projects)
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
    async month(req: Request, res: Response) {
        const {month} = req.body
        try {
            const projects = await this.service.searchByKeywords(month)
            this.decideReponse(req, res, projects)
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
    async year(req: Request, res: Response) {
        const {year} = req.body
        try {
            const projects = await this.service.searchByYear(year)
            this.decideReponse(req, res, projects)
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
    async author(req: Request, res: Response) {
        const {author} = req.body
        try {
            const projects = await this.service.searchByMonth(author)
            this.decideReponse(req, res, projects)

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
    async supervisor(req: Request, res: Response) {
        const {supervisor} = req.body
        try {
            const projects = await this.service.searchBySupervisor(supervisor)
            this.decideReponse(req, res, projects)
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
    async department(req: Request, res: Response) {
        const {department} = req.body
        try {
            const projects = await this.service.searchByDepartment(department)
            this.decideReponse(req, res, projects)
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
    async createdBy(req: Request, res: Response) {
        const {createdBy} = req.body
        try {
            const projects = await this.service.searchByCreatedBy(createdBy)
            this.decideReponse(req, res, projects)
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

    async searchDecider(req:Request, res:Response){
        const {searchKey, searchBy} = req.body
        try {
            const projects = await this.service.dynamicSearch(searchKey, searchBy)
            this.decideReponse(req, res, projects)
            console.log(req.body);
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