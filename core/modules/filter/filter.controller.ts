import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import FilterService from "./filter.service";

class Project {
    public service = new FilterService()
    decideReponse(req: Request, res: Response, data: any) {
        if (data == undefined) {
            serverResponse.handleError(
                req,
                res,
                "forbidden",
                "Search key is invalid"
            );
            return
        }
        if (!data[0]) {
            serverResponse.handleError(
                req,
                res,
                "notFound",
                "No project matches the search parameters"
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
    
    async searchDecider(req:Request, res:Response){
        const {searchKey, searchBy} = req.body
        try {
            const projects = await this.service.dynamicSearch(searchKey, searchBy)
            this.decideReponse(req, res, projects)
        } catch (error:any) {
            serverResponse.handleError(
                req,
                res,
                "internalServerError",
                error.message
            );
            throw error
        }
    }
}

export default Project;