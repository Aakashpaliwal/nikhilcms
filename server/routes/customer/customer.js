var express = require('express');
var router = express.Router();

var add=require('./addcustomer');
router.use('/add', add);

var view=require('./viewcustomer');
router.use('/view', view);

var detail=require('./detailcustomer');
router.use('/detail', detail);

var del=require('./deletecustomer');
router.use('/delete', del);

var update=require('./updatecustomer');
router.use('/update', update);

module.exports=router;