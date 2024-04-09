import Joi from 'joi';

export const searchFilterDTO = Joi.object({
    title: Joi.string().optional(),
    keywords: Joi.array().optional(),
    author: Joi.string().min(3).max(32).optional(),
    month: Joi.string().valid('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December').optional(),
    year: Joi.number().optional(),
    academicYear: Joi.number().optional(),
    supervisors: Joi.string().optional(),
    department: Joi.string().optional(),
    createdBy: Joi.string().optional()
}).options({ allowUnknown: false })