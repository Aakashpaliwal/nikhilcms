var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{
  var site_contact_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
  con.query("select `site_contact_id`,`site_contact_person`, `site_contact_mobile1`, `site_contact_mobile2`, `site_contact_email`, `site_contact_status`,`site_name`,c.customer_name,z.zone_name,l.location_name from site_contact sc inner join site s on s.site_id=sc.site_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id inner join customer c on c.customer_id=s.customer_id  where site_contact_status=1 and site_contact_id=?",site_contact_id,function(err,site_contactresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','site_contactdata':site_contactresult});    
      }      
    });  
  }        
});

module.exports = router;