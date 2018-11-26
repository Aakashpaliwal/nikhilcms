//location_id and employe_id is valid or not 
// mapping one location => multiple employe and one employe => multiple location

var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add equipment page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);

  req.check('location_id','invalid location_id').optional({checkfalsy:true}).isInt();
  req.check('zone_id','invalid location_id').isInt();
  req.check('employe_id','invalid employe').isInt();
 // req.check('employe_id','invalid employe_id').isInt();

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var emp_loc = 
    {
      location_id:req.body.location_id,
      zone_id:req.body.zone_id,
      employe_id:req.body.employe_id,
      location_allocated_by:req.decoded.aid
    };

     con.query("select emp_loc_id from emp_loc where location_id=? and zone_id=? and employe_id=? and emp_loc_status=1 ",[emp_loc.location_id,emp_loc.zone_id,emp_loc.employe_id],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
        con.query("Insert into emp_loc SET ? ;",emp_loc,function(err,result)
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
      else
      { 
        res.json({success:true,msg:'employe already exist'}) ;    
      }      
    });
  }		   
});


module.exports = router;