var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  //esta variable me contiene las variables que vienen por post
  console.log(req.body);
  //aqui procesamos lo que viene de alla del angularjs
});

module.exports = router;
