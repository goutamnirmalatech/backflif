const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "12345",
    database: "flifkart"
})
connection.connect(function (err){
    if(err){
        console.log('error',err.sqlMessage)
    }
    else{
        console.log("connected...")
    }
})
module.exports = connection;