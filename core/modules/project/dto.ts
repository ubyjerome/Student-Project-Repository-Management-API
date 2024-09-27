import Joi, { allow } from 'joi';

export const newProjectDTO = Joi.object({
  title: Joi.string().max(512).required(),
  description: Joi.string().min(3).max(300).required(),
  author: Joi.string().min(3).max(32).required(),
  url: Joi.string().max(2048).required(),
  abstract: Joi.string().min(32).max(2048).required(),
  framework: Joi.string(),
  publicationDate: Joi.object({
    month: Joi.string().valid('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December').required(),
    year: Joi.number().required()
  }).required(),
  academicYear: Joi.number().required(),
  supervisors: Joi.array().items(Joi.string().max(64)).required(),
  keywords: Joi.array().items(Joi.string().max(64)).required(),
  departmentAcronym: Joi.string().required()
}).options({ allowUnknown: false });

export const updateProjectDTO = Joi.object({
  title: Joi.string().max(32).optional(),
  description: Joi.string().min(3).max(300).optional(),
  author: Joi.string().min(3).max(32).optional(),
  url: Joi.string().max(32).optional(),
  abstract: Joi.string().min(32).max(1512).optional(),
  framework: Joi.string().optional(),
  publicationDate: Joi.object({
    month: Joi.string().valid('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December').optional(),
    year: Joi.number().optional()
  }).optional(),
  academicYear: Joi.number().optional(),
  supervisors: Joi.array().items(Joi.string().max(64)).optional(),
  keywords: Joi.array().items(Joi.string().max(64)).optional(),
  departmentAcronym: Joi.string().optional()
}).options({ allowUnknown: false })