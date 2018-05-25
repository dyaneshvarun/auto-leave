var Staff = require('../models/staff');

exports.index = function(req, res) {
    if(req.session.staff)
    	res.render('pages/staff/index',{staff:req.session.staff});
    else
    	res.redirect('/');
};

exports.login = function(req,res){
	console.log("Logging in by "+ req.body.userid);
	var userid = req.body.userid;
	var db = require('../db/db');
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	if(req.session.staff==null){
		console.log('No sessions Found');
		Staff.findOne({'username':userid},function(err,staff1){
			if(staff1==null){
				res.render('pages/userView',{staff : null});
			}
			else if(staff1.password != req.body.password)
			{
				res.render('pages/userView',{staff : null});
			}
			else if(staff1.password == req.body.password){
				req.session.staff = staff1;
				console.log("Session Created"+req.session.id);
				//res.render('pages/userView',{staff : staff1});
				res.redirect('/staff');
			}
			else
			{
				res.render('pages/userView',{staff : null});
			}
		});
	}
	else
	{
			res.redirect('/staff');
			//res.render('pages/userView',{staff : req.session.staff});
	}
	
	//mongoose.connection.close()
	
};

exports.logout = function(req,res){
	req.session.destroy(function(err) {
  // cannot access session here
  console.log("Logged out");
  console.log(err);
  res.redirect('/');
});
}
