var mysql = require('mysql');
module.exports = function() {
    return mysql.createConnection({
        host: 'hostBD',
        user: 'userBD',
        password: 'passwordDB',
        database: 'database'
    });
}