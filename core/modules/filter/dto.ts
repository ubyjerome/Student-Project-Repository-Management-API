import Joi from 'joi';

export const searchFilterDTO = Joi.object({
    searchBy: Joi.string().valid('title', 'keywords', 'author', 'month', 'year', 'academicYear', 'supervisors', 'department', 'createdBy').required(),
    searchKey: Joi.any()
}).options({ allowUnknown: false })

export const stringSearchDTO = Joi.object({
    searchKey: Joi.string().required()
})

export const arraySearchDTO = Joi.object({
    searchKey: Joi.array().required()
})

export const validateSearchKey = function(dataType:string, data:any){
    if(dataType == "string"){
        if(typeof(data) != "string"){
            console.log("Data is not valid");
            return false
        }
    }
    if(typeof(data) != "object"){
        console.log("Data is not valid")
        return false
    }
}