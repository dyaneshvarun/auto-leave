var express = require('express');
var router = express.Router();

var staffController = require('../controllers/staffController')

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.session.staff==null)
  		res.send('respond with a resource');
	else 
		{
			staffController.login(req,res);
		}
});

router.get('/logout',staffController.logout);
/* POST Route */
router.post('/', staffController.login);

module.exports = router;
