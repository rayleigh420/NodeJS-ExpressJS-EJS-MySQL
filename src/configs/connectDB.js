import mysql from 'mysql2/promise'

// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejs-basic-express'
// });

console.log(">>> Creating pool and connect to database....")

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-basic-express'
})

export default pool;