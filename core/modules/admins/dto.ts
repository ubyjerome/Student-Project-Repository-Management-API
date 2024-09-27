import Joi from 'joi';

//DTOs
export const newAdminDTO = Joi.object({
  firstName: Joi.string().required().min(3).max(32),
  lastName: Joi.string().required().min(3).max(32),
  emailAddress: Joi.string().required().min(7).max(32),
  phoneNumber: Joi.string().required().min(11).max(11),
  password: Joi.string().required().min(8).max(64).required(),
  confirmPassword: Joi.string().min(8).max(64).required()
});

export const changePasswordDTO = Joi.object({
  oldPassword: Joi.string().min(8).required(),
  newPassword: Joi.string().min(8).required(),
  confirmPassword: Joi.string().min(8).required()
});

export const loginDTO = Joi.object({
  email: Joi.string().required().min(7).max(32),
  password: Joi.string().required().min(8).max(64).required(),
})