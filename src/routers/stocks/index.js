import { validator } from "../../configs/validator";
import { getStockQuoteSchema,getStocksQuoteSchema } from "./schema";
import { StocksController } from "../../controllers/stocks";
import { Router } from "express";

const router = Router()

const initRouter = () =>{
    router.route('/quotes/').get(validator.query(getStocksQuoteSchema), findMany)
    router.route('/quotes/:codes').get(validator.params(getStockQuoteSchema), find)

    return router;
}

const find = async (req,res) =>{
    try{
        const {code} = req.params
        const stocksController = new StocksController()
        const response = await stocksController.getStockQuote(code)
        res.status(200).json(response)
    }
    catch(err){
        console.error("Router error => ",err)
        res.status(err.code || 500).json({message: err.message || 'Internal server error'})
    }
}
const findMany = async (req,res) =>{
    try{
        const {codes} = req.query
        const stocksController = new StocksController()
        const response = await stocksController.getMultipleStockQuotes(codes)
        res.status(200).json(response)
    }
    catch(err){
        console.error("Router error => ",err)
        res.status(err.code || 500).json({message: err.message || 'Internal server error'})
    }
}

export default initRouter()