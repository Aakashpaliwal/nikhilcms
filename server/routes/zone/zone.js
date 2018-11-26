var express = require('express');
var router = express.Router();

var add=require('./addzone');
router.use('/add', add);

var view=require('./viewzone');
router.use('/view', view);

var detail=require('./detailzone');
router.use('/detail', detail);

var del=require('./deletezone');
router.use('/delete', del);

var update=require('./updatezone');
router.use('/update', update);

module.exports=router;