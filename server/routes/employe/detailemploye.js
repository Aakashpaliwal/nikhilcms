var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{
  var employe_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("select `employe_id`, `employe_name`, `employe_alias`, `employe_email`, `employe_mobile1`,`employe_mobile2`, `employe_blood_group`, `employe_emergency_contact_number`, `employe_account_detail`, `employe_position` from employe where employe_status=1 and employe_id=?  ",employe_id,function(err,employeresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','employedata':employeresult});    
      }      
    });  
  }        
});

module.exports = router;