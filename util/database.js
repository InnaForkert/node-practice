const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Gfhjkm227!!!",
  port: "3307",
});

module.exports = pool.promise();
