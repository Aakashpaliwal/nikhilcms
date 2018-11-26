var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var site_contact_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update site_contact set ? where site_contact_id= ? and site_contact_status=1 ",[{'site_contact_status':0},site_contact_id],function(err,site_contactresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        if(site_contactresult["affectedRows"]==1)
        res.json({"success":true,'msg':'site_contact deleted'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }      
    });  
  }       
});


module.exports = router;