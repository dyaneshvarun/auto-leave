var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = new Schema(
  {
    category: {type: String, required: true},
    leavetypes : {type: [String], required: true},
  },{versionKey:false});
  module.exports = mongoose.model('Category', CategorySchema);