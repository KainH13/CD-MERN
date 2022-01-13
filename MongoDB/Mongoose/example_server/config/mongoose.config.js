const mongoose = require('mongoose');

const db = 'testdb';

mongoose.connect(`mongodb://localhost/${db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`Established a connection to the database: ${db}`))
  .catch(err => console.log('Something went wrong when connecting to the database', err));