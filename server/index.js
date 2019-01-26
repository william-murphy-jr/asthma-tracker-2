const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// var items = require('../database-mongo');

const app = express();


// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log('/ route hit');
  res.send('hello');
});

app.get('/items', (req, res) => {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

