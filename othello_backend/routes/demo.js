
// --------------------------------------------------------------- require section

// 1 - add demo router module

var express = require('express');

// 4- add custom module

var utlsDemo = require('../utilities/utilities_demo');

// --------------------------------------------------------------- init section

var router = express.Router();

// --------------------------------------------------------------- routing section

/* GET users listing. */
router.get('/', function(req, res, next) {


    var sumRes = utlsDemo.sum(3,4);

    var result = utlsDemo.demo_query();
  
    res.send('respond with a demo' + sumRes);

});

// --------------------------------------------------------------- export section

module.exports = router;