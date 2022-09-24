const express = require('express');
const port = 80;
const app = express();
const path = require('path');
const con = require('./middleware/mysql');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if (err) {
        console.log('server is not on' + err);
        return false;
    }
    console.log('server is on port:', port);
})
