var express = require('express');
var router = express.Router();

var update_loc_sup = require('./update_location_supervisor');
router.use('/update', update_loc_sup);

var detail_loc_sup = require('./detail_location_supervisor');
router.use('/detail', detail_loc_sup);

var delete_loc_sup = require('./delete_location_supervisor');
router.use('/delete', delete_loc_sup);

var view_loc_sup = require('./view_location_supervisor');
router.use('/view', view_loc_sup);

var add_location_supervisor = require('./add_location_supervisor');
router.use('/add', add_location_supervisor);

module.exports=router;