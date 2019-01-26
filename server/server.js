const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const mockData = require('./mock-data');
// var items = require('../database-mongo');

const app = express();


// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use(morgan('dev'));

// app.get('/', express.static(`${__dirname}./../public`));
// app.get('/', express.static(`${__dirname}./../client/dist`));
// app.use('/', express.static(__dirname + '../public'));
// app.use(express.static(path.join(__dirname, 'client/public')));
// app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/', (req, res) => {
  console.log('/ route hit');
  // res.sendfile('../client/dist/index.html');
});

app.get('/items', (req, res) => {
  // items.selectAll((err, data) => {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  console.log('mockData: ', JSON.stringify(mockData));
  res.json(JSON.stringify(mockData));
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
