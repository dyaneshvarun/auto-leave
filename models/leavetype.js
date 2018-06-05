var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LeaveTypeSchema = new Schema(
  {
    id: {type: String, required: true,index: true},
    //name: {type: String, enum: ['CL','RH','OD','SCL','ML','EL','CL30','CL20'],required: true},
    name: {type: String,required: true},
    nod : {type: Number, required: true},
  },{versionKey:false});
  module.exports = mongoose.model('LeaveType', LeaveTypeSchema);