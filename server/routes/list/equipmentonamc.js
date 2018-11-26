var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('amc_id', 'invalid amc_id').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
   con.query("select z.zone_name,l.location_name,s.address,c.customer_name,a.amc_id,total_price,FROM_UNIXTIME(UNIX_TIMESTAMP( startDate ),'%d %M %Y') startDate from amc a inner join site s on a.site_id=s.site_id  inner join customer c on c.customer_id=s.customer_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id  where a.status=1 and a.amc_id=? ;select amc_equip_id,frequency,price,FROM_UNIXTIME(UNIX_TIMESTAMP( nextDate ),'%d %M %Y') nextDate from amc_equip ae inner join amc a on ae.amc_id=a.amc_id where a.amc_id=?",[req.query.amc_id,req.query.amc_id],function(err,result,fields)
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
      //console.log('anythin' +   JSON.stringify(result[1]));
      res.json({"success":true,'msg':'all amc equipment list ','amcdata':result[0],'amcequipmentdata':result[1]});    
    }      
  }); 
}             
});


module.exports = router;