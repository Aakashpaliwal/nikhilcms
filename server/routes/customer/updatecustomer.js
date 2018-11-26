var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add customer page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
    req.check('name','name should be more than 3 character ').isLength({min:3});
    req.check('code','code should be more than 3  character ').isLength({min:3});
    req.check('tel_office','telephone office should be more than 3 digit ').isLength({min:3});
    req.check('spoc','spoc must have proper value ').optional({checkfalsy:true}).isLength({min:1});
    req.check('email','email must have proper value ').isLength({min:4}).isEmail().trim();
    req.check('mobile1','mobile should be more than 2 and less than 15 digit ').optional({checkfalsy:true}).isLength({min:10,max:15});
    req.check('special_comment','customer_special_comment must have proper value ').isInt();
    req.check('address1','address1 is required').isLength({min:1});
    // req.check('address2','address2 must have proper value ').optional({checkfalsy:true}).isLength({min:1});
    // req.check('address3','address3 must have proper value ').optional({checkfalsy:true}).isLength({min:1});
    req.check('id', 'id must be a number').isNumeric();
    var verrs=req.validationErrors();
    if(verrs)
    {
      res.json({ success:false,msg: verrs[0].msg,});
      //console.log('*******'+verrs.length+'**********'+JSON.stringify(verrs)+'********'+verrs[1].msg+'********');
    }
    else
    {
      var customername=req.body.name;
      var customer = 
      {
        customer_name:customername.toUpperCase(),
        customer_spoc:req.body.spoc,
        customer_email:req.body.email,
        customer_mobile1:req.body.mobile1,
        // customer_address:req.body.address,
        customer_contact_person:req.body.contact_person,
        customer_tel_office: req.body.tel_office,
        customer_tel_residence:req.body.tel_residence,
        customer_address1: req.body.address1,
        customer_address2: req.body.address2,
        customer_address3:req.body.address3,
        customer_special_comment:req.body.special_comment,
        customer_code:req.body.code
        };
       con.query("select customer_id  from customer where customer_name=? and customer_status=1 and customer_id!=?",[customer.customer_name,req.body.id],function(err,result,fields)
      {
        if(err)
        {
          console.log(err);
          res.json({'success':false,msg: 'something went wrong'});
        }
        else if(result.length ==0)
        {
          con.query("update customer SET ? where customer_id=? and customer_status=1 ;",[customer,req.body.id],function(err,customerresult,fields)
          {
            if(err)
            {
              console.log(sql,err);
              res.json({success:false,msg: 'something went wrong',});
            }
            else
            {
              if(customerresult["affectedRows"]==1)
              res.json({"success":true,'msg':'customer updated'});
              else
              res.json({"success":false,'msg':'invalid operation'}); 
              
            }
          });
        }
        else
        { 
          res.json({success:false,msg:'customer name is not allowed'}) ;    
        }      
      });
  }		   
});


module.exports = router;