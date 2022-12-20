const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'hduser',
  password: 'hduser',
  database: 'troubleticketdb'
});
 
/*connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});*/


app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
