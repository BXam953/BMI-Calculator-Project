const mysql = require('mysql2');


const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "admin",
    database: "128proj"
});
  
module.exports = db;