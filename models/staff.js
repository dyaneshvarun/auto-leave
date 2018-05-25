var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StaffSchema = new Schema(
  {
    staffid: {type: Number, required: true,index: true},
    staffname: {type: String, required: true, max: 50},
    username: {type: String, required: true, max: 10,default:this.staffid},
    password: {type: String, required: true,max: 50,default:this.staffid},
    emailid: {type: String, required: true, regex: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'},
    designation: {type: String, required: true, max: 25},
    category: {type: String, required: true, max: 10}
  },{versionKey:false});
  module.exports = mongoose.model('Staff', StaffSchema);