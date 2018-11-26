var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add complaint page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('description','fill description').isLength({min:1,max:100});
  req.check('site_id','invalid site').isInt();
  req.check('type_id','invalid type').isInt();

  
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var complaint = 
    {
      complaint_description:req.body.description,
      site_id:req.body.site_id,
      complaint_equipment_position:req.body.equipment_position,
      complaint_log:req.body.log,
      complaint_type_id:req.body.type_id,
      complaint_createdby:req.decoded.aid
    };
    con.query("Insert into complaint SET ? ;",complaint,function(err,result)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        res.json({ success:true,msg: 'succesful entry', });
      }
    });
  }		   
});


module.exports = router;