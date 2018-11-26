
var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
        var sql="SELECT * FROM (SELECT ae.amc_id, amc_equip_id, COUNT( ae.amc_equip_id ) as equipment_quantity , c.customer_name,s.site_name,equipment_serial_number, cat.category_name, FROM_UNIXTIME( UNIX_TIMESTAMP( nextDate ) ,  '%d %M %Y' ) nextDate,FROM_UNIXTIME( UNIX_TIMESTAMP( prevDate ) ,  '%d %M %Y' ) prevDate FROM amc_equip ae INNER JOIN amc a ON a.amc_id = ae.amc_id INNER JOIN equipment e ON ae.equipment_id = e.equipment_id INNER JOIN equipment_master em ON em.equipment_master_id = e.equipment_master_id INNER JOIN category cat ON cat.category_id = em.category_id INNER JOIN site s ON e.site_id = s.site_id INNER JOIN customer c ON c.customer_id = s.customer_id INNER JOIN location l ON l.location_id = s.location_id INNER JOIN zone z ON z.zone_id = l.zone_id WHERE a.status =1 and ? <= nextdate AND nextDate <=  ?  GROUP BY ae.amc_id ORDER BY ae.nextDate )parag LEFT OUTER JOIN amc_service aes ON aes.amc_equip_id = parag.amc_equip_id and aes.state!=2";
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