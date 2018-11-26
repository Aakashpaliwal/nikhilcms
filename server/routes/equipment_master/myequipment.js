var express = require('express');
var router = express.Router();

var add=require('./addmyequipment');
router.use('/add', add);

var detail=require('./detailmyequipment');
router.use('/detail', detail);

var update=require('./updatemyequipment');
router.use('/update', update);

var view=require('./viewmyequipment');
router.use('/view', view);

var del=require('./deletemyequipment');
router.use('/delete', del);

module.exports=router;