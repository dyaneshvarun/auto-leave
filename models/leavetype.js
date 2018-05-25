var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LeaveTypeSchema = new Schema(
  {
    id: {type: Number, required: true,index: true},
    name: {type: String, enum: ['CL','RH','OD','SCL','ML','EL','CL30','CL20'],required: true},
    nod : {type: Number, required: true},
  },{versionKey:false});
  module.exports = mongoose.model('LeaveType', LeaveTypeSchema);