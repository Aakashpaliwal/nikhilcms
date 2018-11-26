var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var equipment_master_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update equipment_master set ? where equipment_master_id= ? and equipment_master_status=1 ",[{'equipment_master_status':0},equipment_master_id],function(err,equipment_masterresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        if(equipment_masterresult["affectedRows"]==1)
        res.json({"success":true,'msg':'equipment_master deleted'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }      
    });  
  }                
});


module.exports = router;