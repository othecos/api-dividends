import Joi from "@hapi/joi";

export const emailSchema = Joi.string().email()

export const createAuthUserSchema = Joi.object({
    email: emailSchema.required(),
    emailVerified: Joi.boolean().default(false),
    phoneNumber: Joi.string(),
    password: Joi.string().min(6).required(),
    displayName: Joi.string().default(''),
    photoURL: Joi.string().uri(),
    disabled: Joi.boolean().default(false)
})
export const updateAuthUserSchema = Joi.object({
    emailVerified: Joi.boolean(),
    phoneNumber: Joi.string(),
    password: Joi.string().min(6),
    displayName: Joi.string(),
    photoURL: Joi.string().uri(),
    disabled: Joi.boolean()
})
export const paramsAuthUserSchema = Joi.object({
    email: emailSchema.required()
})