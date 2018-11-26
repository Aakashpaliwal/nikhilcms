var express = require('express');
var router = express.Router();

var add=require('./addsite_contact');
router.use('/add', add);

var view=require('./viewsite_contact');
router.use('/view', view);

var update=require('./updatesite_contact');
router.use('/update', update);

var detail=require('./detailsite_contact');
router.use('/detail', detail);

var del=require('./deletesite_contact');
router.use('/delete', del);

module.exports=router;