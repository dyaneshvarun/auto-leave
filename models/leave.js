var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LeaveSchema = new Schema(
  {
    leaveid: {type: Number, required: true,index: true},
    staffid: {type: Schema.Types.Number, ref: 'Staff' },
    category: {type: String, enum: ['CL','RH','OD','SCL','ML','EL','CL30','CL20'],required: true},
    subcat: {type: String, enum: ['FD','AN','FN'],required: true},
    nod : {type: Number, required: true},
    fromdate : {type:Date, required:true},
    todate : {type:Date, required:true},
    reason : {type:String, required: true},
    status : {type:String, enum:['WAITING','ACCEPTED','REJECTED','CANCELLED'], required:true},
    recentChange :{type:Date, required:true}
  },{versionKey:false});
  module.exports = mongoose.model('Leave', LeaveSchema);