import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
const app = express();

dotenv.config({ path: 'mysql/.env'});   // yarn and dotenv

// const express = require('express');
// const mysql = require('mysql2'); // npm install mysql2
// const app = express();

// require('dotenv').config({ path: 'mysql/.env' }); // yarn add dotenv

app.get('/', function (req, res) {
  // create the connection to database
  const connection = mysql
    .createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    })
    .promise();

  let body = '<h1>single row</h1>';
  let queryPromise = connection.query('SELECT * FROM topic WHERE id = ?', [1]);
  queryPromise
    .then((value) => {
      let [results, fields] = value;
      console.log({ results, fields });
      let [row] = results; // let row = results[0];
      body += `<h2>${row.title}</h2>`;
      body += row.description;
      return connection.query('SELECT * FROM topic');
    })
    .then(([results, fields]) => {
      console.log({ results, fields });
      body += '<h1>multi row</h1>';
      // for (let row of results) {
      //  let title = row.title, description = row.description
      results.forEach(({ title, description}) => {
        body += `<h2>${title}</h2>`;
        body += description;
      });
      res.send(body);
    })
    .catch(console.error)
    .finally(() => connection.destroy());

    // connection query ( ...
});

app.listen(3000, function () {
  console.log('Listening: http://localhost:3000');
});
