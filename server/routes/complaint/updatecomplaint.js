//complaint assign+change state(pending/done..) and log for memo
//ids are valid or not baki he
var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add complaint page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('state','invalid state').isInt();
  req.check('allocated_to','invalid allocation').isInt();
  req.check('id','invalid complaint').isInt();

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var complaint = 
    {
      complaint_state:req.body.state,
      complaint_allocated_to:req.body.allocated_to,
      complaint_allocation:1,
      complaint_allocation_date:formatted,
      complaint_log:req.body.log,
      complaint_allocated_by:req.decoded.aid,
    };
    con.query("update complaint SET ? where complaint_id=? and complaint_status=1 ;",[complaint,req.body.id],function(err,complaintresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(complaintresult["affectedRows"]==1)
        res.json({"success":true,'msg':'complaint updated'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }
    });
  }		   
});


module.exports = router;