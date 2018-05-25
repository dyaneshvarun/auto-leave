var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://test:test@cluster0-0pxq3.mongodb.net/lms?';
mongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
var db = mongoose.connection;
module.exports = db;