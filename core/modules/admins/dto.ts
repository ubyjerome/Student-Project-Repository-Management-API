import Joi from "joi";

export const changePasswordDto = Joi.object({
  oldPassword: Joi.string().min(8).required(),
  newPassword: Joi.string().min(8).required(),
  confirmPassword: Joi.string().min(8).required(),
});