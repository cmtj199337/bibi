var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var Goods = require('../models/goods')

mongoose.connect('mongodb://127.0.0.1:27017/dumall')

mongoose.connection.on('connected', () => {
  console.log('Success ')
})

mongoose.connection.on('error', () => {
  console.log('default ')
})

mongoose.connection.on('disconnected', () => {
  console.log('disconnected ')
})
router.get('/', function(req, res, next) {
  res.send('shop list~~')
});

module.exports = router