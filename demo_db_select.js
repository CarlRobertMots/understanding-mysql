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
    
    con.query("SELECT * FROM customers", (err, result, fields)=>{
        if (err) throw err;
        console.log(result);
    })
  })