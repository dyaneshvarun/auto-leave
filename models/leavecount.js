var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LeaveCountSchema = new Schema(
  {
    staffid: {type: Schema.Types.Number, ref: 'Staff' },
    countdays : {type:Map, of: Number }
  },{versionKey:false});
  module.exports = mongoose.model('LeaveCount', LeaveCountSchema);