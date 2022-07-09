import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
require('dotenv').config()
import connection from './configs/connectDB'

const app = express()
const port = process.env.PORT || 8080;

// get data easy way, you should config like that
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config view engine
configViewEngine(app);

// Config router
initWebRoute(app);

app.listen(port, () => {
    console.log(`Nodejs is running in port ${port}...`)
})

