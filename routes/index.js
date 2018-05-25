var express = require('express');
var router = express.Router();
var path = require('path');
var importer = require('../importer');
var leave = require('../controllers/leaveController');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.staff)
  	res.sendFile(path.join(__dirname, '../public', 'login.html'));
  else 
  	res.redirect('/staff');
});

router.get('/import/:importID', importer.importFile);
router.get('/getPerson/:objId', importer.getStaff);
router.get('/leave', leave.addLeave);



module.exports = router;
