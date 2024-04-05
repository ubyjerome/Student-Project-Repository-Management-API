import Joi from "joi"

export const newAdminSchema = Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    emailAddress:Joi.string().required(),
    passwordPhrase:Joi.string().required(),
})

export const changePasswordSchema = Joi.object({
  oldPassword: Joi.string().min(8).required(),
  newPassword: Joi.string().min(8).required(),
  confirmPassword: Joi.string().min(8).required(),
});