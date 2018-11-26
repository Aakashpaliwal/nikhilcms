var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');


router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('site_id', 'invalid site_id').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
  con.query("select `site_contact_id`,`site_contact_person`,  `site_contact_mobile1`, `site_contact_mobile2`, `site_contact_email` from site_contact where site_contact_status=1 and site_id= ? order by site_contact_id desc",[req.query.site_id],function(err,siteresult,fields)
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