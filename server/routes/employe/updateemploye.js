var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add employe page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('employe_name',' employe name is required').exists().isLength({min: 2 , max: 100}).withMessage('Name should not be empty, should be more than 2 and less than 100 character').trim();
  req.check('mobile1',' mobile should be 10 digit').isLength({min:10,max:10}).isInt();
  req.check('mobile2','alternate mobile should be 10 digit').optional({checkFalsy:true}).isLength({min:10,max:10}).isInt();
  // req.check('account_detail','invalid account_detail').optional({checkfalsy:true}).isLength({min:10});
  // req.check('blood_group','invalid blood group').optional({checkfalsy:true}).isLength({min:10});
  req.check('emergency_contact_number','emergency contact number should be 10 digit').optional({checkfalsy:true}).isLength({min:10,max:10}).isInt();

  req.check('position','invalid position').isLength({min:1,max:1}).isInt();
  // var regex = new RegExp('/^[/d[789]{1}/d{9}$/'); // ^[\d]{2,4}[- ]?[\d]{3}[- ]?[\d]{3,5}|([0])?(\+\d{1,2}[- ]?)?[789]{1}\d{9}$
  // req.check('mobile',"invalid mobile").matches(regex);
  req.check('email','invalid email').isEmail();
  req.check('id', 'id must be a number').isInt();


  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var employe = 
    {
      employe_name:req.body.employe_name,
      employe_mobile1:req.body.mobile1,
      employe_mobile2:req.body.mobile2,
      employe_email:req.body.email,
      employe_position:req.body.position,
      employe_createdby:req.decoded.aid,
      employe_alias:req.body.alias,
      employe_emergency_contact_number:req.body.emergency_contact_number,
      employe_blood_group:req.body.blood_group,
      employe_account_detail:req.body.account_detail
    };
    con.query("select employe_id  from employe where employe_email=? and employe_status=1 and employe_id!=? ",[employe.employe_email,req.body.id],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
        con.query("update employe SET ? where employe_id=? and employe_status=1 ;",[employe,req.body.id],function(err,employeresult,fields)
        {
          if(err)
          {
            console.log(err);
            res.json({success:false,msg: 'something went wrong'});
          }
          else
          {
            if(employeresult["affectedRows"]==1)
            res.json({"success":true,'msg':'employe updated'});
            else
            res.json({"success":false,'msg':'invalid operation'}); 
            
          }
        });        
      }
      else
      { 
        res.json({success:true,msg:'email is not allowed'}) ;    
      }      
    }); 
  }		   
});


module.exports = router;