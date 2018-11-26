var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{    
  con.query("select location_id,location_name,location_pin,zone_name from location l left outer join zone z on z.zone_id=l.zone_id  where location_status=1 and zone_status=1 order by location_id  desc",req.decoded.aid,function(err,locationresult,fields)
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
      res.json({"success":true,'msg':'all location list ','locationdata':locationresult});    
    }      
  });           
});


module.exports = router;