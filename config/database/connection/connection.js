let mongoose = require('mongoose');

let dbName = 'Foogle';
let connection = mongoose.createConnection(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true, useUnifiedTopology: true
});

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log(`Connection to ${dbName} established successfully.`);
});

module.exports = connection;