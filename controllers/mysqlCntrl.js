const con = require('../middleware/mysql');

module.exports.getData = (req, res) => {
    con.query('select * from users', (err, users) => {
        if (err) {
            return res.send('bug defined in code');
        }
        else {
            return res.send(users);
        }
    })
}

module.exports.addData = (req, res) => {
    const data = req.body;
    con.query('INsert INTO users SET ?', data, (err, result, fields) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send(result);
        }
    });
}