
// --------------------------------------------------------------- require section

// 1 - add demo router module

var express = require('express');

// 4 - add custom module

var utlsDemo = require('../utilities/utilities_demo');

// --------------------------------------------------------------- init section

var router = express.Router();

// --------------------------------------------------------------- routing section

/* GET users listing. */
router.get('/', function(req, res, next) {

    var sumRes = utlsDemo.sum(3,4);

    // var result = utlsDemo.demo_query();
  
    res.json({'myResponse': sumRes});

});

router.get('/demoRouting', function(req, res, next) {

    var sumRes = utlsDemo.sum(10,7);

    // var result = utlsDemo.demo_query();
  
    res.json({'myResponse': sumRes});

});

// --------------------------------------------------------------- export section

module.exports = router;