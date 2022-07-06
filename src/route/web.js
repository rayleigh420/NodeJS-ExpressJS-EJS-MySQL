import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)     // tham so nao se truyen vao getHomePage ma khong can co dau ()

    router.get('/about', (req, res) => {
        res.send('I am rayleigh!')
    })

    return app.use('/', router)
}

export default initWebRoute;
//module.exports = initWebRoute;