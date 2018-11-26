//only amc detail not amc_equip data
var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var amc_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("select z.zone_name,l.location_name,s.address,c.customer_name,a.amc_id,total_price,FROM_UNIXTIME(UNIX_TIMESTAMP( startDate ),'%d %M %Y') startDate from amc a inner join site s on a.site_id=s.site_id  inner join customer c on c.customer_id=s.customer_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id  where a.amc_id=?  ",amc_id,function(err,amcresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','amcdata':amcresult});    
      }      
    });  
  }        
});

module.exports = router;