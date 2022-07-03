const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World! with Rayleigh')
})

app.listen(port, () => {
    console.log(`Nodejs is running in port ${port}...`)
})