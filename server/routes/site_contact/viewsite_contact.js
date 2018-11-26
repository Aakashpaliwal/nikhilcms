var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{         
  con.query("select `site_contact_id`,`site_contact_person`, `site_id`, `site_contact_mobile1`, `site_contact_mobile2`, `site_contact_email`, `site_contact_status`,`site_name`,c.customer_name,z.zone_name,l.location_name from site_contact sc inner join site s on s.site_id=sc.site_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id inner join customer c on c.customer_id=s.customer_id where site_contact_status=1 order by site_contact_id desc",req.decoded.aid,function(err,site_contactresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false,msg: 'something went wrong'});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all site_contact list ','site_contactdata':site_contactresult});    
    }      
  });           
});


module.exports = router;