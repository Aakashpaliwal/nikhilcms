var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('company_id', 'invalid company_id').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
   con.query("select s.site_id,s.site_name,zone_name,location_name  from site s inner join location l on s.location_id=l.location_id inner join zone z on l.zone_id=z.zone_id where s.site_status=1 and s.customer_id=?",req.query.company_id,function(err,siteresult,fields)
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
      res.json({"success":true,'msg':'all site list ','sitedata':siteresult});    
    }      
  }); 
}             
});


module.exports = router;