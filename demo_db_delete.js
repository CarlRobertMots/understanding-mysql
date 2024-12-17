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
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'"
    con.query(sql, (err, result, fields)=>{
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    })
  })