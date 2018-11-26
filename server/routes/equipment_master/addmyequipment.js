// in db same record(duplicate) can't inserted : unique defined

var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.post('/',func.auth2,function(req,res)
{
    console.log(req.body);
    req.check('category_id','equipment category must have proper value ').isInt();
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
      //console.log('*******'+verrs.length+'**********'+JSON.stringify(verrs)+'********'+verrs[1].msg+'********');
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
      con.query("Insert into equipment_master SET ? ;",equipment_master,function(err,result)
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