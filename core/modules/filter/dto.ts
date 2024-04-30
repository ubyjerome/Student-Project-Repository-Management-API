import Joi from 'joi';

export const searchFilterDTO = Joi.object({
    searchBy: Joi.string().valid('title', 'keywords', 'author', 'month', 'year', 'academicYear', 'supervisors', 'department', 'createdBy','others').required(),
    searchKey: Joi.any()
}).options({ allowUnknown: false })

export const stringSearchDTO = Joi.object({
    searchKey: Joi.string().required()
})

export const arraySearchDTO = Joi.object({
    searchKey: Joi.array().required()
})

export const validateSearchKey = function(dataType:string, data:any, method:string){
    if(dataType == "string"){
        if(typeof(data) != "string"){
            throw new Error(`\"dataKey\" must be a string for ${method}`)
        }
        return
    }
    if(typeof(data) != "object"){
        throw new Error(`\"dataKey\" must be a string for ${method}`)
    }
}