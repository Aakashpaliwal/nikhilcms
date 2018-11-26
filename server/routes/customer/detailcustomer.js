var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var customer_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("select `customer_id`, `customer_name`, `customer_spoc`, `customer_contact_person`, `customer_email`, `customer_mobile1`, `customer_tel_office`, `customer_tel_residence`, `customer_address1`, `customer_address2`, `customer_address3`, `customer_special_comment`, `customer_code` from customer where customer_status=1 and customer_id=?  ;select s.site_id,s.site_name,zone_name,location_name  from site s inner join location l on s.location_id=l.location_id inner join zone z on l.zone_id=z.zone_id where site_status=1 and s.customer_id=?",[customer_id,customer_id],function(err,customerresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','customerdata':customerresult[0],'sitedata':customerresult[1]});    
      }      
    });  
  }        
});

module.exports = router;