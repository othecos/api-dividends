import Joi from "@hapi/joi";
import { emailSchema } from "../auth/schema";

export const createUserSchema = Joi.object({
    email: emailSchema.required()
})
export const userParamEmailSchema =  Joi.object({
    email: emailSchema.required()
})
export const updateUserSchema = Joi.forbidden()