import * as admin from 'firebase-admin'
import { SECRET_ID } from '../credentials/firebase'
const NoneSecureRoutes = ['/swagger']
export default async (req, res, next) => {
    if (NoneSecureRoutes.some(route => req.path.includes(route))) return next()
    let token = req.headers['authtoken']
    if (token) {
        try {
            admin.auth().verifyIdToken(token)
                .then(() => {
                    next()
                }).catch(() => {
                    res.status(403).json({
                        type: 'headers',
                        message: 'Unauthorized'
                    })
                });
        } catch (err) {
            console.trace(err)
            res.status(err.code || 401).json({
                type: 'headers',
                message: 'You should provide an auth for this route'
            })
        }
    } else if(req.headers['secret_id']){
        const secret_id = req.headers['secret_id']
        if(secret_id === SECRET_ID) next()
        else{
            res.status(401).json({
                type: 'headers',
                message: 'Wrong secret ID'
            })
        }
    } else {
        res.status(401).json({
            type: 'headers',
            message: 'You should provide an auth for this route'
        })
    }
}