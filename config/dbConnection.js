var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host: 'sql10.freemysqlhosting.net',
        user: 'sql10166767',
        password: 'yAe6PPxjr7',
        database: 'sql10166767'
    });
}

module.exports = function() {
    return connMySQL;
}