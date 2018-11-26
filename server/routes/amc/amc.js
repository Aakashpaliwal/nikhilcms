var express = require('express');
var router = express.Router();

var add=require('./addamc');
router.use('/add', add);

var detail=require('./detailamc');
router.use('/detail', detail);

var view=require('./viewamc');
router.use('/view', view);

var update=require('./updateamc');
router.use('/update', update);

var del=require('./deleteamc');
router.use('/delete', del);

var amc_scheduling=require('./amc_scheduling');
router.use('/amc_scheduling',amc_scheduling);

var amc_scheduling2=require('./amc_scheduling2');
router.use('/amc_scheduling2',amc_scheduling2);

module.exports=router;