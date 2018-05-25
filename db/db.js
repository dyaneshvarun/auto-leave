var mongoose = require('mongoose');
var mongoDB = 'paste - here';
mongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
var db = mongoose.connection;
module.exports = db;
