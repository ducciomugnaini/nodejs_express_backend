// --------------------------------------------------------------- require section

var sql = require("mssql");

// --------------------------------------------------------------- init section

// config for your database
var config = {
    user: 'mugna87',
    password: 'mugna87',
    server: 'localhost',
    port: 52713,
    database: 'Sandboxlearning'
};

var sqlConnection = {}

// todo utilizzare le promise

sqlConnection.executeQuery = function (query) {

    var that = this;

    var result = {
        connectionError: null,
        queryError: null,
        recordSet: null
    }

    // connect to your database
    sql.connect(config, function (conErr) {

        if (conErr){
            result.connectionError = conErr;
            result.queryError = null;
            result.recordSet = null;
        }

        var request = new sql.Request();

        request.query(query, function (queryErr, recordSet) {

            if (queryErr) {
                result.connectionError = null;
                result.queryError = queryErr;
                result.recordSet = null;
            }

            result.connectionError = null;
            result.error = null;
            result.recordSet = recordSet;

            return result;
        });
    });
}

// --------------------------------------------------------------- export section

module.exports = sqlConnection;