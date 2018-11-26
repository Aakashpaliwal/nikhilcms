var express = require('express');
var router = express.Router();

var profile = require('./profile/profile.js');
router.use('/profile', profile);

var admin = require('./admin/admin.js');
router.use('/admin', admin);

var employe = require('./employe/employe.js');
router.use('/employe', employe);

var zone = require('./zone/zone.js');
router.use('/zone', zone);

var equipment_master = require('./equipment_master/myequipment.js');
router.use('/equipment_master', equipment_master);

var customer = require('./customer/customer.js');
router.use('/customer', customer);

var category = require('./category/category.js');
router.use('/category', category);

var service = require('./service/service.js');
router.use('/service', service);

var site_contact = require('./site_contact/site_contact.js');
router.use('/site_contact', site_contact);

var site = require('./site/site.js');
router.use('/site', site);

var complaint = require('./complaint/complaint.js');
router.use('/complaint',complaint);

var emp_loc = require('./emp_loc/emp_loc.js');
router.use('/emp_loc',emp_loc);

var invoice = require('./invoice/invoice.js');
router.use('/invoice',invoice);

var list = require('./list/list.js');
router.use('/list',list);

var location_supervisor = require('./location_supervisor/location_supervisor.js');
router.use('/location_supervisor',location_supervisor);

var proposal = require('./proposal/proposal.js');
router.use('/proposal',proposal);

var equipment = require('./equipment/equipment.js');
router.use('/equipment',equipment);

var schedule = require('./schedule/schedule.js');
router.use('/schedule',schedule);

var location = require('./location/location.js');
router.use('/location',location);

var amc = require('./amc/amc.js');
router.use('/amc',amc);

module.exports = router;