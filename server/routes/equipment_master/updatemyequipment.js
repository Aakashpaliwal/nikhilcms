var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add equipment_master page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
    req.check('category_id','equipment category must have proper value ').isNumeric();
    req.check('capacity','equipment capacity must have proper value ').isLength({min:1});
    req.check(' year_of_launch','year of launch must have proper value ').optional({checkfalsy:true}).isLength({min:4,max:4}).isNumeric().trim();
    req.check('brand','equipment brand must have proper value ').optional({checkfalsy:true}).isLength({min:3});
    req.check('model','model must have proper value ').optional({checkfalsy:true}).isLength({min:3});
    req.check(' year_of_discontinued',' year of discontinued must have proper value ').optional({checkfalsy:true}).isLength({min:4,max:4}).isInt().trim();
    //req.check('a2','a2 must have proper value ').optional({checkfalsy:true}).isLength({min:3});
    //req.check('a3','a3 must have proper value ').optional({checkfalsy:true}).isLength({min:3});

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var equipment_master = 
    {
      category_id:req.body.category_id,
      brand:req.body.brand,
      model:req.body.model,
      year_of_launch:req.body.year_of_launch,
      capacity:req.body.capacity,
        year_of_discontinued:req.body.year_of_discontinued,
        a2:req.body.a2,
        a3:req.body.a3
    };
    con.query("update equipment_master SET ? where equipment_master_id=? and equipment_master_status=1 ;",[equipment_master,req.body.id],function(err,equipment_masterresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong peerhaps equipment already registered',});
      }
      else
      {
        if(equipment_masterresult["affectedRows"]==1)
        res.json({"success":true,'msg':'equipment_master updated'});
        else
        res.json({"success":false,'msg':'invalid operation'});  
      }
    });
  }		   
});


module.exports = router;