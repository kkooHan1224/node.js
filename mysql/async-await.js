const express = require('express')
const mysql = require('mysql2');
const app = express()

require('dotenv').config({ path: 'mysql/.env' }); //yarn add dotenv

app.get('/', async (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

  let body = '<h1>multiple row</h1>';
  let[results, fields] = await connection.query('SELECT * FROM topic');
  console.log({results, fields});
  results.forEach((row) => {
    let { title,description} = row;
    body += `<h2>${title}</h2>`;
    body += description;
  })
  res.send(body);
});
  app.listen(3333, function () {
    console.log(process.env);
    console.log('Listening: http://localhost:3333');
  });