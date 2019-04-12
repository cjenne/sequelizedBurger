// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.jawsDbBurger) {
  // console.log("jawsdb connect");
  connection = mysql.createConnection(process.env.jawsDbBurger);
} else {
  // console.log("is local sql connect running");
  connection = mysql.createConnection({
  host: "localhost",
  // port: 3306,
  user: "root",
  password: "_removed password",
  database: "burger_db"
  })
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "removed password",
//   database: "burger_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;
