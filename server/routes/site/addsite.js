var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add site page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('site_name','invalid site name').isLength({min:1,max:100});
  req.check('landmark','invalid landmark').isLength({min:1,max:100});
  req.check('address1','invalid address').isLength({min:1,max:100});
  req.check('address2','invalid address2').optional({checkfalsy:true}).isLength({min:1,max:100});
  req.check('address3','invalid address3').optional({checkfalsy:true}).isLength({min:1,max:100});
  req.check('location_id','invalid location').isInt();
  req.check('customer_id','invalid customer').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var site_name=req.body.site_name;
    var landmark=req.body.landmark;
    var address1=req.body.address1;
    var address2=req.body.address2 ;
    var address3=req.body.address3;
    var site = 
    {
      site_name:site_name.toUpperCase(),
      site_landmark:landmark.toUpperCase(),
      site_address1:address1.toUpperCase(),
      site_address2:address2.toUpperCase(),
      site_address3:address3.toUpperCase(),
      customer_id:req.body.customer_id,
      location_id:req.body.location_id,
      site_createdby:req.decoded.aid
    };
     con.query("select site_id from site where site_name=? and site_status=1 ",[site.site_name],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
         con.query("Insert into site SET ? ;",site,function(err,result)
        {
          if(err)
          {
            console.log(sql,err);
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
        res.json({success:false,msg:'this site_name already registered'}) ;    
      }      
    });
  }		   
});
module.exports = router;