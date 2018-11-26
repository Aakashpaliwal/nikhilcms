// at frontend this may be prob that how to send assignto i.e on which basis select exicutive/supervisor/employe list
//amc_service assign+change state(no serviced/pending/done..) and log for memo
//ids are valid or not baki he

var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add amc_service page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('state','invalid state').isInt();
  //if state is 2 than nextDate must be change in amc_equip
  req.check('assignto','invalid supervisor/exicutive/employe').isInt();
  req.check('amc_equip_id','invalid amc_service').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var amc_service = 
    {
      state:req.body.state,
      assignto:req.body.assignto,
      log:req.body.log,
      amc_equip_id:req.body.amc_equip_id
    };
    con.query("insert into amc_service SET ? ;",[amc_service],function(err,amc_serviceresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(amc_serviceresult["affectedRows"]==1)
        res.json({"success":true,'msg':'service assigned'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }
    });
  }		   
});


module.exports = router;