var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host: 'hostBD',
        user: 'userBD',
        password: 'passwordDB',
        database: 'database'
    });
}

module.exports = function() {
    return connMySQL;
}