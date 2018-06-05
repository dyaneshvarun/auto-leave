var Leave = require('../models/leave');
var LeaveType = require('../models/leavetype');
var Category = require('../models/category');
var LeaveCount = require('../models/leavecount');
const bodyParser = require("body-parser");
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.apply = function(req,res){
	var db = require('../db/db');
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	Category.findOne({category:req.session.staff.category},function(err,docs){
		
		
	})
	.then(function(result){
		console.log("Result"+ result);
		res.render('pages/staff/apply',{
			staff:req.session.staff,
			category:result.leavetypes
		})
	})
	.catch(function(err){
		console.log(err);
	});
}
exports.apply1 = function(req,res){
	var db = require('../db/db');
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	var maxcount = 0;
	LeaveType.findOne({id:req.body.category},function(err,docs){

	}).then(function(leavetype){
		maxcount = leavetype.nod;
		var category = req.body.category;
		var subcat = req.body.subcat;
		var nod = req.body.nod;
		LeaveCount.findOne({staffid:req.session.staff.username},function(err,docs){

		})
		.then(function(result){
			var count = result.countdays.get(category);
			if(maxcount - count - nod >= 0){
				res.render('pages/staff/apply1',{
					staff:req.session.staff,
					apply:{
						nod: nod
					}
				})
			}
			else
				{
					res.redirect('/staff/apply');
				}
		})	
	})
	.catch(function(err){
		console.log(err);
		res.send('Error : '+err);
	})

}
exports.addLeave = function(req,res){
	var db = require('../db/db');
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	console.log("Adding Leave ");
	var obj = {
		leaveid: 1,
    	staffid: 8,
    	category: 'CL',
    	subcat : 'FD',
    	nod : 2,
    	fromdate : new Date(),
    	todate : new Date(),
    	reason : 'CHECK',
    	status : 'WAITING',
    	recentChange :new Date()
	};
	var obj1 = new Leave(obj);
	obj1.save(function(err){
		console.log(err);
	});
	//mongoose.connection.close()
	
};