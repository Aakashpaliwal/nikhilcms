var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('contact_person','invalid site name').isLength({min:1,max:100});
  req.check('email','invalid email').isEmail().isLength({min:2,max:100});
  req.check('mobile1','invalid mobile').isLength({min:10,max:10}).isInt();
  req.check('mobile2','invalid alternate mobile').optional({checkfalsy:true}).isLength({min:10,max:10}).isInt();
  req.check('site_id','invalid site').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var site_contact = 
    {
      site_contact_person:req.body.contact_person,  
      site_id:req.body.site_id,  
      site_contact_email:req.body.email,  
      site_contact_mobile1:req.body.mobile1,
      site_contact_mobile2:req.body.mobile2, 
      // site_createdby:req.decoded.aid
    };
    //  con.query("select site_id from site where site_name=? and site_status=1 ",[site.site_name],function(err,result,fields)
    // {
    //   if(err)
    //   {
    //     console.log(err);
    //     res.json({'success':false,msg: 'something went wrong'});
    //   }
    //   else if(result.length ==0)
    //   {

         con.query("Insert into site_contact SET ? ;",site_contact,function(err,result)
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

    //   }

    //   else
    //   { 
    //     res.json({success:false,msg:'this site_name already registered'}) ;    
    //   }      
    // });
  }		   
});
module.exports = router;