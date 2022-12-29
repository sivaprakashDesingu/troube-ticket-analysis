const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const { connection } = require('./Config/Database');
const app = express();

/* connect to database */
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;ss
  }
  console.log('Mysql Connected...');
}); 

const user = require('./routes/user');
const transaction = require('./routes/transaction');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Serve static files from the React app
/*app.use(express.static(path.join(__dirname, 'client/build')));*/

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});*/

app.use('/api/user', user);
app.use('/api/transaction', transaction)


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
