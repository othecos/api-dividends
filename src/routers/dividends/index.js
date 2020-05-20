import { Router } from "express"

import DividendsController from "../../controllers/dividends";
import { validator } from "../../configs/validator";
import { notifybyEmailSchema } from "./schema";

const router = Router()

const initRouter = () =>{
    router.route('/calendar').get(search)
    router.post('/notify',validator.body(notifybyEmailSchema),notify)
    return router;
}

const search = async (req,res) =>{
    try {
        const dividendsController = new DividendsController()
        const result = await dividendsController.searchForDividends()
        res.status(200).json(result)
    } catch (error) {
        res.status(error.code || 500).json({message: error.message || 'Internal server error'})
    }
}
const notify = async (req,res)=>{
    try {
        const {to} = req.body
        const dividendsController = new DividendsController()
        const result = await dividendsController.notifyNewDividends(to)
        res.status(200).json(result)
    } catch (error) {
        res.status(error.code || 500).json({message: error.message || 'Internal server error'})
    }
}
export default initRouter()