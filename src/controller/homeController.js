import connection from '../configs/connectDB'

let getHomepage = (req, res) => {
    let data = [];
    connection.query(
        'select * from `users` ',
        function (err, results, fields) {
            console.log('>>> check my sql')
            console.log(results);
            data = results.map((row) => { return row });

            return res.render('test/test.ejs', { dataUser: data });
        }
    );

}

module.exports = {
    getHomepage
}