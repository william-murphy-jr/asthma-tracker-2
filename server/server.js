const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
// const selectAll = require('../database/index.js');
const db = require('../database/index.js');

const mockData = require('./_mock-data');
// var items = require('../database-mongo');

const app = express();


// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));


app.use(morgan('dev'));
app.use(bodyParser());

app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/', (req, res) => {
  console.log('/ route hit');

  db.selectAll((err, results) => {
    if (err) {
      res.status(501).send();
    } else {
      res.json(results);
    }
  });
  
  // res.json(req.body);
  // res.sendfile('../client/dist/index.html');
});

app.get('/records', (req, res) => {

  // db.selectAll((err, results) => {
  //   if (err) {
  //     res.status(501).send();
  //   } else {
  //     res.json(results);
  //   }
  // });

  // console.log('mockData: ', JSON.stringify(mockData));
  // res.json(mockData);
  // res.json({});
});

app.post('/records', (req, res) => {
  console.log('res.body: ', res.body);
  // console.log('req: ', req);
  const { body } = req;

  db.addRecord(body, (err, result) => {
    if (err) {
      console.log('Error', err);
      res.json(err);
    } else {
      console.log('THE result: ', result);
      res.json(result);
    }
  });
  // res.json({"error":"error"});
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
