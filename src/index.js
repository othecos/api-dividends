import chalk from 'chalk'
import '@babel/polyfill'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import AuthenticatorMiddleware from './auth'
import * as admin from 'firebase-admin'

// --- Routers ---
import {
    users,
    dividends,
    auth,
    stocks
} from './routers'


const serviceCredentials = require('./credentials/firebase').CREDENTIALS

admin.initializeApp({
    credential: admin.credential.cert(serviceCredentials),
    databaseURL: "https://api-dividends.firebaseio.com"
})

const app = express()
app.use(cors())

app.set('PORT', process.env.PORT || 8080)
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(morgan(':user-agent :method :url :status :response-time ms'))

const BASE_PATH = '/v1'
app.use(AuthenticatorMiddleware)
app.use(`${BASE_PATH}/stocks`, stocks)
app.use(`${BASE_PATH}/users`, users)
app.use(`${BASE_PATH}/dividends`, dividends)
app.use(`${BASE_PATH}/auth`, auth)

app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        res.status(400).json({
            type: err.type, // it could be 'headers', 'body', 'query' or 'params'
            message: err.error.toString()
        })
    } else {
      console.log(err)
        next(err)
    }
})
// --------------
app.listen(app.get('PORT'), () => {
    /* eslint-disable no-console */
    console.log(chalk.blue(`Express server listening on port ${chalk.whiteBright(app.get('PORT'))}`))
})