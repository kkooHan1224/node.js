const express = require('express');
const mysql = require('mysql2');// npm install mysql2
const app = express();

require('dotenv').config({'mysql/.env'});// yarn add dotenv

app.get('/', function (req, res) {// create the connection to database
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  
  let body = '<h1>single row</h1>';
  // simple query
  connection.query(
    'SELECT * FROM topic WHERE id = 1',
    function(err, results, fields) {
      console.log(err);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
})

app.listen(3000, function () {
    console.log('Listening: http://localhost:3000');
});
