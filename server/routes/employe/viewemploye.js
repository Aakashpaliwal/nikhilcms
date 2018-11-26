var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{          
  con.query("select `employe_id`, `employe_name`, `employe_alias`, `employe_email`, `employe_mobile1`,`employe_mobile2`, `employe_blood_group`, `employe_emergency_contact_number`, `employe_account_detail`, `employe_position` from employe where employe_status=1 order by employe_id desc ",req.decoded.aid,function(err,employeresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false,msg: 'something went wrong'});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all employe list ','employedata':employeresult});    
    }      
  });          
});

module.exports = router;