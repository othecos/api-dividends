import { Router } from "express"
import UsersController from "../../controllers/users"
import { validator } from "../../configs/validator"
import { createUserSchema, userParamEmailSchema, updateUserSchema } from "./schema"
import { getErrorCode, getErrorMessage } from "../../configs/errors"

const router = Router()

const initRouter = () => {
    router.route('/')
        .get(findAll)
        .post(validator.body(createUserSchema), create)
    router.route('/:email', validator.params(userParamEmailSchema))
        .get(find)
        .patch(validator.body(updateUserSchema), update)
        .delete(remove)

    return router;
}

const find = async (req, res) => {
    try {
        const { email } = req.params
        const usersController = new UsersController()
        const user = await usersController.findByEmail(email)
        console.log(user)
        res.status(200).json(user.toJSON())
    } catch (error) {
        res.status(getErrorCode(error.code)).json({ message: error.message || getErrorMessage(getErrorCode(error.code)) })
    }
}
const findAll = async (req, res) => {
    try {
        const usersController = new UsersController()
        const users = await usersController.findAll()
        res.status(200).json(users.map((user) => user.toJSON()))
    } catch (error) {
        console.error(error);
        res.status(getErrorCode(error.code)).json({ message: error.message || getErrorMessage(getErrorCode(error.code)) })
    }
}
const create = async (req, res) => {
    try {
        const { email } = req.body
        const usersController = new UsersController()
        const result = await usersController.create(email)
        res.status(200).json(result)
    } catch (error) {
        console.error("Users Router error -> ", error);
        res.status(getErrorCode(error.code)).json({ message: error.message || getErrorMessage(getErrorCode(error.code)) })
    }
}

const update = async (req, res) => {
    try {
        const { email } = req.params
        const usersController = new UsersController()
        const user = await usersController.update(email, req.body)
        res.status(200).json(user.toJSON())
    } catch (error) {
        res.status(getErrorCode(error.code)).json({ message: error.message || getErrorMessage(getErrorCode(error.code)) })
    }
}

const remove = async (req, res) => {
    try {
        const { email } = req.params
        const usersController = new UsersController()
        await usersController.remove(email)
        res.status(204).end()
    } catch (error) {
        res.status(getErrorCode(error.code)).json({ message: error.message || getErrorMessage(getErrorCode(error.code)) })
    }
}
export default initRouter()