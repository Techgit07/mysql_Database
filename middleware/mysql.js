const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

con.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('mysql_Database connected successfullly!');
    }
});

con.query('select * from users', (err, done) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('result', done)
    }
}); 

module.exports = con;   