var express = require('express');
var router = express.Router();

var assign=require('./assignservice');
router.use('/assign', assign);


module.exports=router;