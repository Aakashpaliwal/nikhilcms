var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add loc_sup page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('location_id','invalid location_id').isInt();
  req.check('supervisor_id','invalid supervisor_id').isInt();
  req.check('id','invalid id').isInt();

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var loc_sup = 
    {
      location_id:req.body.location_id,
      supervisor_id:req.body.supervisor_id,
      createdby:req.decoded.aid
    };
    con.query("select loc_sup_id from loc_sup where location_id=? and loc_sup_id != ? and status=1",[loc_sup.location_id,req.body.id],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
        con.query("update loc_sup SET ? where loc_sup_id=? and status=1 ;",[loc_sup,req.body.id],function(err,equipmentresult,fields)
        {
          if(err)
          {
            console.log(err);
            res.json({success:false,msg: 'something went wrong',});
          }
          else
          {
            if(equipmentresult["affectedRows"]==1)
            res.json({"success":true,'msg':'updated'});
            else
            res.json({"success":false,'msg':'invalid operation'});         
          }
        });
      }
      else
      { 
        res.json({success:false,msg:'location already have a supervisor'}) ;    
      }      
    });
  }		   
});


module.exports = router;