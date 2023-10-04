const mongoose = require('mongoose');
let dataBase = '5oce'

mongoose.connect(`mongodb://127.0.0.1:27017/${dataBase}`)
  .then(() => console.log('Connected!'));