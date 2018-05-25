var express = require('express');
var router = express.Router();

var staffController = require('../controllers/staffController')
var leaveController = require('../controllers/leaveController')
//Staff Module
router.get('/',staffController.index);
router.get('/apply',leaveController.apply);
router.post('/dateselection',leaveController.apply1);
module.exports = router;
