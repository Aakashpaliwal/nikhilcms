var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{ 
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var loc_sup_id=req.query.id;
    con.query("SELECT l.location_name, e.employe_name, alias, email, mobile, z.zone_name FROM loc_sup ls INNER JOIN location l ON l.location_id = ls.location_id INNER JOIN employe e ON e.employe_id = ls.supervisor_id INNER JOIN zone z ON z.zone_id = l.zone_id WHERE ls.status =1 AND e.status =1 AND l.status =1 AND z.status =1 AND loc_sup_id =?",loc_sup_id,function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','data':result});    
      }      
    });  
  }        
});

module.exports = router;