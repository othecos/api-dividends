import { Router } from "express"
import { getErrorCode, getErrorMessage } from "../../configs/errors"
import { validator } from "../../configs/validator"
import AuthController from "../../controllers/auth"
import { createAuthUserSchema, paramsAuthUserSchema, updateAuthUserSchema } from "./schema"

const router = Router()

const initRouter = () => {

    router.route('/')
        .get(findAll)
        .post(validator.body(createAuthUserSchema), create)

    router.route('/:email', validator.params(paramsAuthUserSchema))
        .get(find)
        .delete(remove)
        .patch(validator.body(updateAuthUserSchema), update)

    return router;
}
const findAll = async (req, res) => {
    try {
        const authController = new AuthController()
        const users = await authController.findAllAuthUser()
        res.status(200).json(users)
    } catch (error) {
        res.status(getErrorCode(error.code)).json({
            message: error.message || getErrorMessage(getErrorCode(error.code))
        })
    }
}
const find = async (req, res) => {
    try {
        const { email } = req.params
        const authController = new AuthController()
        const user = await authController.findAuthUser(email)
        res.status(200).json(user)
    } catch (error) {
        res.status(getErrorCode(error.code)).json({
            message: error.message || getErrorMessage(getErrorCode(error.code))
        })
    }
}
const create = async (req, res) => {
    try {
        const authController = new AuthController()
        const response = await authController.create(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(getErrorCode(error.code)).json({
            message: error.message || getErrorMessage(getErrorCode(error.code))
        })
    }
}
const remove = async (req, res) => {
    try {
        const { email } = req.params
        const authController = new AuthController()
        const response = await authController.remove(email)
        res.status(200).json(response)
    } catch (error) {
        console.error(error);
        res.status(getErrorCode(error.code)).json({
            message: error.message || getErrorMessage(getErrorCode(error.code))
        })
    }
}
const update = async (req, res) => {
    try {
        const { email } = req.params
        const updateRequest = req.body
        const authController = new AuthController()
        const response = await authController.update(email, updateRequest)
        res.status(200).json(response)
    } catch (error) {
        res.status(getErrorCode(error.code)).json({
            message: error.message || getErrorMessage(getErrorCode(error.code))
        })
    }
}
export default initRouter()