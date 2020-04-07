let mongoose = require('mongoose');
const dbConnectionString = process.env.MONGO_DB;

let connection = mongoose.createConnection(dbConnectionString, {
    useNewUrlParser: true, useUnifiedTopology: true
});

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log(`Connection to MongoDB Atlas Cluster foogle-app established successfully.`);
});

module.exports = connection;