import { resolveShowConfigPath } from '@babel/core/lib/config/files';
import pool from '../configs/connectDB'

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('test/test.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('SELECT * FROM users where id = ?', [id])
    return res.send(JSON.stringify(user))
}

let createUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName, lastName, email, address) values(?, ?, ?, ?)', [firstName, lastName, email, address])

    return res.redirect('/')
}

module.exports = {
    getHomepage, getDetailPage, createUser
}