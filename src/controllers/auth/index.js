import * as admin from 'firebase-admin'
import { getFirebaseErrors } from '../../configs/errors'
import UsersController from '../users'

export default class AuthController {
    constructor() {
        this.auth = admin.auth()
    }
    async create(userProperties) {
        try {
            const user = await this.auth.createUser(userProperties)
            if (user) {
                return user
            } else {
                throw { code: 401, message: 'Invalid credentials' }
            }
        } catch (error) {
            const firebaseError = getFirebaseErrors(error.code)
            throw { code: firebaseError.code, message: firebaseError.message }
        }
    }
    async remove(email) {
        try {
            const user = await this.auth.getUserByEmail(email)
            if (user) {
                if (await this.preRemoveUser(email)) {
                    return await this.auth.deleteUser(user.uid)
                } else {    
                    throw { code: 500 }
                }
            } else {
                throw { code: 401, message: 'Invalid credentials' }
            }
        } catch (error) {
            const firebaseError = getFirebaseErrors(error.code)
            console.log(error)
            throw { code: firebaseError.code, message: firebaseError.message }
        }
    }
    async update(email, userProperties) {
        try {
            const user = await this.auth.getUserByEmail(email)
            if (user) {
                const updateUser = await this.auth.updateUser(user.uid, userProperties)
                return updateUser
            } else {
                throw { code: 401, message: 'Invalid credentials' }
            }
        } catch (error) {
            const firebaseError = getFirebaseErrors(error.code)
            throw { code: firebaseError.code, message: firebaseError.message }
        }
    }
    async findAuthUser(email) {
        try {
            const user = await this.auth.getUserByEmail(email)
            if (user) {
                return user
            } else {
                throw { code: 404, message: 'User not found' }
            }
        } catch (error) {
            const firebaseError = getFirebaseErrors(error.code)
            throw { code: firebaseError.code, message: firebaseError.message }
        }
    }
    async findAllAuthUser() {
        try {
            const users = await this.auth.listUsers()
            if (users) {
                return users
            } else {
                throw { code: 404, message: 'User not found' }
            }
        } catch (error) {
            console.error(error);
            
            const firebaseError = getFirebaseErrors(error.code)
            throw { code: firebaseError.code, message: firebaseError.message }
        }
    }
    async preRemoveUser(email) {
        try {
            const usersController = new UsersController()
            return await usersController.remove(email)
        } catch (err) {
            console.log(err)
            if(err.code == 404){
                 return true
            } else{
                throw { code: err.code, message: err.message }
            }
        }
    }
}