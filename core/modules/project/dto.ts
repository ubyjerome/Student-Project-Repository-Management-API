import Joi from 'joi';

export const newProjectDTO = Joi.object({
  title: Joi.string().max(64).required(),
  description: Joi.string().min(3).max(300).required(),
  author: Joi.string().min(3).max(32).required(),
  url: Joi.string().max(32).required(),
  abstract: Joi.string().min(32).max(1512).required(),
  dateSubmitted: Joi.object({
    month: Joi.string().valid('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December').required(),
    year: Joi.number().required()
  }).required(),
  academicYear: Joi.number().required(),
  supervisors: Joi.array().items(Joi.string().max(64)).required(),
  keywords: Joi.array().items(Joi.string().max(64)).required(),
  departmentAcronym: Joi.string().required(),
  ref: Joi.object({
    Departments: Joi.string().required(),
    Admins: Joi.string().required()
  }).required(),
  createdBy: Joi.string().required()
});