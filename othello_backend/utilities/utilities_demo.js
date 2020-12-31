
// --------------------------------------------------------------- require section

var sqlConnection = require('../model/mssqlDatabase')

// --------------------------------------------------------------- init section

var utility_demo = {}

utility_demo.sum = function (a, b) {

    return a + b;
    
};

utility_demo.demo_query = function(){

    var result = sqlConnection.executeQuery('select * from Disasters');

    return result;

}

// --------------------------------------------------------------- export section

module.exports = utility_demo;