var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{         
//  con.query("select z.zone_name,l.location_name,s.address,c.customer_name,e.equipment_name,cat.category_name,a.amc_id,total_price,FROM_UNIXTIME( UNIX_TIMESTAMP( startDate ),'%d %M %Y') startDate from amc a inner join equipment e on a.equipment_id=e.equipment_id inner join myequipment me on me.myequipment_id=e.myequipment_id inner join category cat on cat.category_id=me.category_id  inner join site s on e.site_id=s.site_id inner join customer c on c.customer_id=s.customer_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id  where a.status=1 order by amc_id desc",req.decoded.aid,function(err,amcresult,fields)
  con.query("select z.zone_name,l.location_name,s.address,c.customer_name,a.amc_id,total_price,FROM_UNIXTIME(UNIX_TIMESTAMP( startDate ),'%d %M %Y') startDate from amc a inner join site s on a.site_id=s.site_id  inner join customer c on c.customer_id=s.customer_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id  where a.status=1 order by amc_id desc",req.decoded.aid,function(err,amcresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false,'msg':'something went wrong'});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all amc list ','amcdata':amcresult});    
    }      
  });           
});


module.exports = router;