import serverResponse from "../../utils/serverResponse";
import { Request, Response } from "express";
import FilterService from "./filter.service";

class Project {
    public service = new FilterService()
    decideReponse(req: Request, res: Response, data: any) {
        if (undefined || !data[0]) {
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
    
    async searchDecider(req:Request, res:Response){
        const {searchKey, searchBy} = req.body
        try {
            const projects = await this.service.dynamicSearch(searchKey, searchBy)
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
}

export default Project;