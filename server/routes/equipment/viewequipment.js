var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{         
    con.query("select `equipment_serial_number`, `po_type`, `invoice_number`, `invoice_date`, `installation_date`, `commission_date`, `commission_report_number`, `equipment_position`,equipment_id,c.customer_name,z.zone_name,l.location_name,s.site_name,cat.category_name,capacity,brand,model,year_of_discontinued,year_of_launch from equipment e inner join equipment_master em on e.equipment_master_id=em.equipment_master_id inner join category cat on cat.category_id= em.category_id inner join site s on s.site_id = e.site_id inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id inner join customer c on c.customer_id=s.customer_id   where equipment_status=1",req.decoded.aid,function(err,equipmentresult,fields)
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
        res.json({"success":true,'msg':'all equipment list ','equipmentdata':equipmentresult});    
      }      
    });          
});


module.exports = router;