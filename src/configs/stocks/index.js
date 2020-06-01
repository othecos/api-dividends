export const STOCK_PRICE_URL = 'https://statusinvest.com.br/acoes'
export const STOCK_TYPE = {
    UNIT: 'unit',
    PN: 'pn',
    ON: 'on'
}
export const STOCK_CODE = {
    1 : STOCK_TYPE.ON,
    2 : STOCK_TYPE.PN,
    3 : STOCK_TYPE.ON,
    4 : STOCK_TYPE.PN,
    5 : STOCK_TYPE.PN,
    6 : STOCK_TYPE.PN,
    7 : STOCK_TYPE.PN,
    8 : STOCK_TYPE.PN,
    9 : STOCK_TYPE.ON,
    10 : STOCK_TYPE.PN,
    11 : STOCK_TYPE.UNIT

}
export const getStockType = (stock) =>{
    const regex =  new RegExp(/((?:\w|\d){4})(\d{1,2})/,'i')
    const stock_code = stock.match(regex)
    try{
        return STOCK_CODE[stock_code[2]]
    }catch{
        return STOCK_TYPE.PN
    }
}