exports.getConfig = function () {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'fastpass'
  });
  return con;
}
