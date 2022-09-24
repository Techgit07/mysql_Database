const express = require('express');
const mysqlCntrl = require('../controllers/mysqlCntrl')
const routes = express.Router();

routes.get('/getData', mysqlCntrl.getData);
routes.post('/addData', mysqlCntrl.addData);

module.exports = routes;