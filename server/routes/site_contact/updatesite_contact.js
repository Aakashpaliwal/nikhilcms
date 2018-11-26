
var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
//  res.json({"success":true,'msg':'add site_contact page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);

  req.check('id', 'invalid site_contact').isInt();
  req.check('contact_person','invalid site name').isLength({min:1,max:100});
  req.check('email','invalid email').isEmail().isLength({min:2,max:100});
  req.check('mobile1','invalid mobile').isLength({min:10,max:10}).isInt();
  req.check('mobile2','invalid alternate mobile').optional({checkfalsy:true}).isLength({min:10,max:10}).isInt();
  //req.check('site_id','invalid site').isInt();
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
      // site_id:req.body.site_id,  
      site_contact_email:req.body.email,  
      site_contact_mobile1:req.body.mobile1,
      site_contact_mobile2:req.body.mobile2
    };
    //  con.query("select site_contact_id from site_contact where site_contact_name=? and site_contact_status=1 and site_contact_id!=? ",[site_contact.site_contact_name,req.body.id],function(err,result,fields)
    // {
    //   if(err)
    //   {
    //     console.log(err);
    //     res.json({'success':false,msg: 'something went wrong'});
    //   }
    //   else if(result.length ==0)
    //   {
        con.query("update site_contact SET ? where site_contact_id=? and site_contact_status=1 ;",[site_contact,req.body.id],function(err,site_contactresult,fields)
        {
          if(err)
          {
            console.log(sql,err);
            res.json({success:false,msg: 'something went wrong',});
          }
          else
          {
            if(site_contactresult["affectedRows"]==1)
            res.json({"success":true,'msg':'site_contact updated'});
            else
            res.json({"success":false,'msg':'invalid operation'}); 
          }
        });
    //   }
    //   else
    //   { 
    //     res.json({success:false,msg:'this address already registered'}) ;    
    //   }      
    // });
  }      
});
module.exports = router;