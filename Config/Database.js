const mysql = require('mysql');

const MYSQL_USERNAME = 'hduser';
const MYSQL_PASSWORD = 'hduser';
const MYSQL_HOSTNAME = 'localhost';
const MYSQL_PORT = '27017';
const MYSQL_DB = 'troubleticketdb';
var connection = mysql.createConnection({
    host     : MYSQL_HOSTNAME,
    database : MYSQL_DB,
    user     : MYSQL_USERNAME,
    password : MYSQL_PASSWORD,
});
module.exports = {
    connection: connection
}
