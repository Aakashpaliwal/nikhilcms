var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{
  var location_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
  con.query("select location_id,location_name,zone_name,location_pin from location l left outer join zone z on z.zone_id=l.zone_id  where location_status=1 and zone_status=1 and location_id=?",location_id,function(err,locationresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','locationdata':locationresult});    
      }      
    });  
  }        
});

module.exports = router;