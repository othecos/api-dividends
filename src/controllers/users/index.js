import UsersStorageController from "../storage/users"
import AuthController from "../auth"
import {User} from './../../models/users'

export default class UsersController {
    constructor() {
        this.usersStorage = new UsersStorageController()
        this.authController = new AuthController()

    }
    async findByEmail(email) {
        try {
            const document = await this.usersStorage.findByEmail(email)
            const user = new User()
            user.setDataFromDB(document.data())
            user.setUid(document.id)
            return user
        } catch (error) {
            console.error(error);
            
            throw { code: error.code, message: error.message }
        }
    }
    async findAll() {
        try {
            const documents = await this.usersStorage.findAll()
            const users = []
            for (let index = 0; index < documents.length; index++) {
                const document = documents[index];
                const user = new User()
                user.setDataFromDB((await document).data())
                user.setUid((await document).id)
                users.push(user)
            }
            return users
        } catch (error) {
            throw { code: error.code, message: error.message }
        }
    }
    async create(email, fields) {
        try {
            let authUser = await this.authController.findAuthUser(email)
            if (authUser) {
                let user = {
                    ...fields,
                    email
                }
                await this.usersStorage.create(authUser.uid, user)
                return authUser;
            } else {
                throw { code: 404, message: 'User Auth Not Found' }
            }
        } catch (error) {
            throw { code: error.code, message: error.message }
        }
    }
    async remove(email) {
        try {
            const user = await this.findByEmail(email)
            if (user) {
                const uid = user.uid
                return await this.usersStorage.remove(uid)
            } else {
                throw { code: 404, message: 'User not found' }
            }
        } catch (error) {
            console.log(error)
            throw { code: error.code, message: error.message }
        }
    }
    async update(email, fields) {
        try {
            let user = await this.findByEmail(email)
            if (user) {
                const uid = user.uid
                await this.usersStorage.update(uid, user)
                return user
            } else {
                throw { code: 404, message: 'User not found' }
            }

        } catch (error) {
            throw { code: error.code, message: error.message }
        }
    }
}