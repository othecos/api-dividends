import * as admin from 'firebase-admin'
export default class StorageController{
    constructor(){
        this.database = admin.firestore()
    }
}