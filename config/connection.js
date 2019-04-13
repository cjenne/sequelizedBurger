var mysql = require('mysql');
var connection;

// Decision tree to use local or heroku jawsdb connection.
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_KEY,
    database: process.env.MYSQL_DBNAME
  });
};

var mysql = require('mysql');