var express = require('express');
var router = express.Router();

// var update_emp_loc = require('./update_location_supervisor');
// router.use('/update', update_emp_loc);

// var detail_emp_loc = require('./detail_location_supervisor');
// router.use('/detail', detail_emp_loc);

var delete_emp_loc = require('./delete_emp_loc');
router.use('/delete', delete_emp_loc);

// var view_emp_loc = require('./view_location_supervisor');
// router.use('/view', view_emp_loc);

var add_location_supervisor = require('./add_emp_loc');
router.use('/add', add_location_supervisor);

module.exports=router;