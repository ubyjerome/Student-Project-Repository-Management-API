import Joi from 'joi';

export const searchFilterDTO = Joi.object({
    searchBy: Joi.string().valid('title', 'keywords', 'author', 'month', 'year', 'academicYear', 'supervisors', 'department', 'createdBy').required(),
    searchKey: Joi.any()
}).options({ allowUnknown: false })