var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{
  var complaint_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  { // `complaint_type_id`
    con.query("select site_name,c.complaint_id,`complaint_description`, `complaint_equipment_position`,FROM_UNIXTIME( UNIX_TIMESTAMP( c.complaint_date ) ,  '%d %M %Y' ) complaint_date,  `complaint_state`,complaint_log,`complaint_allocation`,complaint_allocation_date,`complaint_closer_file`, `complaint_completion_date`,em.employe_id,employe_name,employe_alias , l.location_name,l.location_id,z.zone_name,customer_name company from complaint c inner join complaint_type ct on c.complaint_type_id =ct.complaint_type_id inner join site s on c.site_id=s.site_id inner join location l on s.location_id=l.location_id inner join zone z on z.zone_id=l.zone_id inner join customer cu on s.customer_id=cu.customer_id left outer join employe em on em.employe_id = complaint_allocated_to  where complaint_status=1 and complaint_id=?  ",complaint_id,function(err,complaintresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','complaintdata':complaintresult});    
      }      
    });  
  }        
});

module.exports = router;