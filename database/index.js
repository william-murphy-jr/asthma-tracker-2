const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/peakflow');

const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

const recordSchema = mongoose.Schema({
  date: String,
  time: String,
  peakFlow: String,
  comment: String,
});

const Record = mongoose.model('Record', recordSchema);

const selectAll = function(callback) {
  Record.find({}, function(err, records) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, records);
    }
  });
};

const addRecord = (body, callback) => {
  const record = new Record({
    date: body.date,
    time: body.time,
    peakFlow: body.peakFlow,
    comment: body.comment,
  });

  record.save((err, result) => {
    if (err) {
      console.log('Error :', err);
      callback(err, null);
    } else {
      console.log('Your query returned: ', result);
      callback(null, result);
    }
  });
};

module.exports = {
  selectAll,
  addRecord,
};