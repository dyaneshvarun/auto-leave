var fs = require('fs');
var Staff = require('./models/staff');
var mongoose = require('mongoose');
var db = require('./db/db');
exports.importFile = function(req,res){
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	var fileName = '/home/dyanesh/Desktop/lms/leave/hello.txt';
	fs.readFile(fileName,'utf-8',function(err,data){
		console.log(err);
		var lines = data.split("\n");
		var headings = [];
		var words = lines[0].substring(1,lines[0].length-2);
		var accept = lines[1].substring(1,lines[1].length-2).split(', ');
		var strsplit = words.split(', ');
		for(var i=2;i<lines.length-1;i++){
			var jsonStr = lines[i].substring(1,lines[i].length-2).split(', ');
			var obj = new Staff();
			for(var j=0;j<strsplit.length;j++){
				if(accept[j]=='true'){
					obj.set(strsplit[j],jsonStr[j]);
				}
			}

			obj.set('username', obj._id);
			obj.set('password', obj._id);

			console.log(obj.get('username'));
			if(obj._id!=null){
					obj.save(function(err){
						console.log(err);
					});
				}
			}
	});
	
	res.send('Hello');
};
exports.getStaff = function(req,res){
	console.log(req.params.objId);
	Staff.findOne({username:req.params.objId},function(err,docs){
		res.render('pages/userView',{staff:docs});
		//res.send(docs);
	})
}