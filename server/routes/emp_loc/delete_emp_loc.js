var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var emp_loc_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update emp_loc set ? where emp_loc_id= ? and emp_loc_status=1 ",[{'emp_loc_status':0,'emp_loc_allocated_by':req.decoded.aid},emp_loc_id],function(err,emp_locresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        if(emp_locresult["affectedRows"]==1)
        res.json({"success":true,'msg':'emp_loc deleted'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }      
    });  
  }                
});


module.exports = router;