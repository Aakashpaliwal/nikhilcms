var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('site_id', 'invalid site_id').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
   con.query("select e.equipment_serial_number as equipment,equipment_id,em.* from equipment e inner join equipment_master em on e.equipment_master_id=em.equipment_master_id where equipment_status=1 and e.site_id=?",req.query.site_id,function(err,result,fields)
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
      res.json({"success":true,'msg':'equipment list ','data':result});    
    }      
  }); 
}             
});


module.exports = router;