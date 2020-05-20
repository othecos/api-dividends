import Joi from '@hapi/joi' 
export const getStockQuoteSchema = Joi.object({
    code:  Joi.string().required().regex(/[A-Z]{4}[0-9]([0-4])?F?/)
})
export const getStocksQuoteSchema = Joi.object({
    codes:  Joi.array().items(Joi.string().required().regex(/[A-Z]{4}[0-9]([0-4])?F?/))
})