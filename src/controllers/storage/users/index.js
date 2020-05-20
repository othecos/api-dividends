import StorageController from "..";
import { USERS_DATABASE } from "../../../configs/users";
import { getFirebaseErrors } from "../../../configs/errors";

export default class UsersStorageController extends StorageController{
    constructor(){
        super()
        this.usersCollection =  this.database.collection(USERS_DATABASE)
    }
    async findByEmail(email){
        try {
            const doc = await this.usersCollection.where('email','==',email).get()
            console.log(email,doc.empty)
            if(!doc.empty){
                return doc.docs[0]
            }else{
                throw { code: 404, message: 'User Not Found'}
            }
        } catch (error) {
            console.error(error);
            
            const firebaseError = getFirebaseErrors(error.code)
            throw {code: firebaseError.code ,message: firebaseError.message}
        }
    }
    async findAll(){
        try {
            const queryDocs = await this.usersCollection.listDocuments()
            const docs = []
            for (let index = 0; index < queryDocs.length; index++) {
                let user = queryDocs[index];
                let data = user.get()
                docs.push(data)
            }
            return docs
        } catch (error) {
            const firebaseError = getFirebaseErrors(error.code)
            throw {code: firebaseError.code ,message: firebaseError.message}
        }
    }
    async create(uid,user){
        try {
           return await this.usersCollection.doc(uid).create(user)
        } catch (error) {
            const firebaseError = getFirebaseErrors(error.code)
            throw {code: firebaseError.code ,message: firebaseError.message}
        }
    }
    async remove(uid){
        try {
            return await this.usersCollection.doc(uid).delete()
        } catch (error) {
            console.error(error);
            
            const firebaseError = getFirebaseErrors(error.code)
            throw {code: firebaseError.code ,message: firebaseError.message}
        }
    }
    async update(uid,user){
        try {
            return await this.usersCollection.doc(uid).delete(user)
        } catch (error) {
            const firebaseError = getFirebaseErrors(error.code)
            throw {code: firebaseError.code ,message: firebaseError.message}
        }
    }
}