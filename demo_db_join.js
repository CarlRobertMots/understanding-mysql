const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "qwerty",
    database: "mydb"
  });

  con.connect((err) =>{
    if(err) throw err;
    console.log("Connected");
    var sql = "SELECT customers.name AS user, customers.address AS address FROM customers";
    con.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
    })
  })