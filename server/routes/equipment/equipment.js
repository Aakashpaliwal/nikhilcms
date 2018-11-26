var express = require('express');
var router = express.Router();

var add=require('./addequipment');
router.use('/add', add);

var detail=require('./detailequipment');
router.use('/detail', detail);

var view=require('./viewequipment');
router.use('/view', view);

var update=require('./updateequipment');
router.use('/update', update);

var del=require('./deleteequipment');
router.use('/delete', del);

module.exports=router;