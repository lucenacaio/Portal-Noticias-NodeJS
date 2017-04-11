var mysql = require('mysql');

var connMySQL = function() {
    // return mysql.createConnection({
    //     host: 'nodejsnoticias.esy.es',
    //     user: 'u676842716_admin',
    //     password: '123456',
    //     database: 'u676842716_notic'
    // });
    return mysql.createConnection({
        host: 'sql12.freemysqlhosting.net',
        user: 'sql12168637',
        password: 'y1BcD25MjA',
        database: 'sql12168637'
    });
}

module.exports = function() {
    return connMySQL;
}