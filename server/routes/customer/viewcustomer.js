var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{          
    con.query("select `customer_id`, `customer_name`, `customer_spoc`, `customer_contact_person`, `customer_email`, `customer_mobile1`, `customer_tel_office`, `customer_tel_residence`, `customer_address1`, `customer_address2`, `customer_address3`, `customer_special_comment`, `customer_code` from customer where customer_status=1 order by customer_id desc  ",req.decoded.aid,function(err,customerresult,fields)
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
        res.json({"success":true,'msg':'all customer list ','customerdata':customerresult});    
      }      
    });          
});


module.exports = router;