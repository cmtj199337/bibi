var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var Goods = require('../models/goods')

var url = 'mongodb://127.0.0.1:27017/dumall'
mongoose.connect(url, { useNewUrlParser: true }, (err, db) => {
  if(err) {
    console.log('Connection Error:' + err)
  }else {
    console.log('Connection Success')
  }
})

router.get('/', function(req, res, next) {
  res.send('shop list~~')
});

module.exports = router