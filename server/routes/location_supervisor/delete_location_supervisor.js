var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var loc_sup_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update loc_sup set ? where loc_sup_id= ? and status=1 ",[{'status':0,createdby:req.decoded.aid},loc_sup_id],function(err,loc_supresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        if(loc_supresult["affectedRows"]==1)
        res.json({"success":true,'msg':'loc_sup deleted'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }      
    });  
  }                
});


module.exports = router;