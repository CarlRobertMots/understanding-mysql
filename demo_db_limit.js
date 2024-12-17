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
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
    })
  })