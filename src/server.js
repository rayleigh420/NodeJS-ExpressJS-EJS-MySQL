import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080;

// Config view engine
configViewEngine(app);

// Config router
initWebRoute(app);

app.listen(port, () => {
    console.log(`Nodejs is running in port ${port}...`)
})