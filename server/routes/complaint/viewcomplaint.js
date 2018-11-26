var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{    
  //con.query("select c.complaint_id,complaint_allocation,complaint_description ,FROM_UNIXTIME( UNIX_TIMESTAMP( c.complaint_date ) ,  '%d %M %Y' ) complaint_date,em.employe_id,employe_name,alias , complaint_state, complaint_log,l.location_name,l.location_id,z.zone_name,customer_name company from complaint c inner join site s on c.site_id=s.site_id inner join location l on s.location_id=l.location_id inner join zone z on z.zone_id=l.zone_id inner join customer cu on s.customer_id=cu.customer_id left outer join employe em on em.employe_id = c.assignto where complaint_status=1",function(err,complaintresult,fields)
  con.query("select c.complaint_id,complaint_allocation,complaint_description ,FROM_UNIXTIME( UNIX_TIMESTAMP( c.complaint_date ) ,  '%d %M %Y' ) complaint_date,complaint_state, complaint_log,l.location_name,l.location_id,z.zone_name,customer_name company from complaint c  inner join site s on c.site_id=s.site_id inner join location l on s.location_id=l.location_id inner join zone z on z.zone_id=l.zone_id inner join customer cu on s.customer_id=cu.customer_id where complaint_status=1",function(err,complaintresult,fields)
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
      res.json({"success":true,'msg':'all complaint list ','complaintdata':complaintresult});    
    }      
  });           
});
module.exports = router;