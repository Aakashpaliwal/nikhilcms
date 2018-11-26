var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{
  var site_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
  con.query("select s.site_id,`site_name`, `site_address1`, `site_address2`, `site_address3`, `site_landmark`,c.customer_name,c.customer_id,z.zone_name,z.zone_id,l.location_name,location_pin,l.location_id from site s inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id inner join customer c on c.customer_id=s.customer_id where site_status=1 and site_id=?;select `equipment_serial_number`, `invoice_number`, `installation_date`,equipment_id,cat.category_name,capacity,brand from equipment e inner join equipment_master em on e.equipment_master_id=em.equipment_master_id inner join category cat on cat.category_id= em.category_id where equipment_status=1 and e.site_id=?;select `site_contact_id`,`site_contact_person`, `site_contact_mobile1`, `site_contact_mobile2`, `site_contact_email` from site_contact where site_contact_status=1 and site_id=? order by site_contact_id desc",[site_id,site_id,site_id],function(err,siteresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','sitedata':siteresult[0],'equipmentdata':siteresult[1],'sitecontactdata':siteresult[2]});    
      }      
    });  
  }        
});

module.exports = router;