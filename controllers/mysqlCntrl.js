const con = require('../middleware/mysql');

module.exports.getData = (req, res) => {
    con.query('select * from users', (err, users) => {
        if (err) {
            return res.json('error defined');
        }
        else {
            return res.json(users);
        }
    })
}

module.exports.addData = (req, res) => {
    const data = req.body;
    con.query('INsert INTO users SET ?', data, (err, result, fields) => {
        if (err) {
            return res.json(err);
        }
        else {
            return res.json(result);
        }
    });
}