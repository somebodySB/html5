var express = require('express');
var router = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  app.get('/test', function(req, res, next) {
    res.render('test', { title: 'Express' });
  });
}

module.exports = router;
