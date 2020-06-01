import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { STOCK_PRICE_URL, getStockType } from '../../configs/stocks'

export class StocksController{
    constructor(){

    }
    /**
     * 
     * @param {string} stockCode 
     */
    async getStockQuote(stockCode){
        try{
            const page = await fetch(`${STOCK_PRICE_URL}/${stockCode}`)
            if (page) {
                const html = await page.text()
                const $ = cheerio.load(html);
                let quote = $('[title="Valor atual do ativo"] > .value').text()
                const response = { 
                    code: stockCode,
                    price: quote,
                    timestamp: Date.now(),
                    type: getStockType(stockCode)
                }
                console.log(response)
                return response
            }else{
                return null
            }
        }catch(err){
            console.error(err);
            return null;
        }
        
    } 
    async getMultipleStockQuotes(stocksCode){
        try{
            console.log(stocksCode)
            if(stocksCode && Array.isArray(stocksCode)){
                let stocks = []
                for (let index = 0; index < stocksCode.length; index++) {
                    const code = stocksCode[index];
                     stocks.push(await this.getStockQuote(code))
                }
                return stocks
            }else{
                throw { code: 400}
            }
        }catch(err){
            console.error(err);
            
            throw {code: err.code || 500}
        }
       
    }  
}