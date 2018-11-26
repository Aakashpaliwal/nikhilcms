var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  // var sql="SELECT * FROM (SELECT FROM_UNIXTIME( UNIX_TIMESTAMP( s.assignDate ) ,  '%d %M %Y' ) assignDate, c.naem company, z.naem zone, e.naem serial, e.equipment_master_id FROM schedule s JOIN customer c ON s.customer_id = c.customer_id INNER JOIN zone z ON z.zone_id = s.zone_id INNER JOIN equipment e ON e.equipment_id = s.equipment_id WHERE s.state =0 AND s.assignDate = CAST( NOW() AS DATE ) ) temp INNER JOIN equipment_master em ON em.equipment_master_id = temp.equipment_master_id";
  

   //var sql="SELECT frequency,price,FROM_UNIXTIME( UNIX_TIMESTAMP( startDate ),'%d %M %Y')startDate,FROM_UNIXTIME( UNIX_TIMESTAMP( nextDate ),'%d %M %Y') nextDate  FROM  `amc` WHERE  ? <= nextdate AND nextDate <=  ? ";
    var sql="select z.zone_name,l.location_name,s.site_name,c.customer_name,equipment_serial_number,cat.category_name,em.model,a.amc_id,aes.assignto,aes.log,aes.state,ae.amc_equip_id,FROM_UNIXTIME( UNIX_TIMESTAMP( nextDate ),'%d %M %Y') nextDate from amc_equip ae inner join amc a on a.amc_id=ae.amc_id  inner join equipment e on ae.equipment_id=e.equipment_id inner join equipment_master em on em.equipment_master_id=e.equipment_master_id inner join category cat on cat.category_id=em.category_id inner join site s on e.site_id=s.site_id inner join customer c on c.customer_id=s.customer_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id left outer JOIN amc_service aes on aes.amc_equip_id=ae.amc_equip_id and aes.state!=2 WHERE  ? <= nextdate AND nextDate <=  ? and  a.status=1 group by amc_equip_id   order by amc_equip_id desc";
    con.query(sql,[req.body.sd,req.body.fd],function(err,amcresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false});
      }
      // else if(result.length==0)
      // {
      //   res.json({"success":true,'msg':'Data Not Available'});
      // }
      else
      {
        res.json({"success":true,'msg':'all amc schedule list ','amcdata':amcresult});    
      }      
    });           
});


module.exports = router;