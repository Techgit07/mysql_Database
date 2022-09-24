const express = require('express');
const routes = express.Router();

routes.use('/mysql', require('../routes/mysql'));

module.exports  = routes;