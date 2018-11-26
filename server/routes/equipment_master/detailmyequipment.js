var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{
  var equipment_master_id=req.query.id;
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
  con.query("select equipment_master_id,c.category_name,c.category_id,capacity,brand,model,year_of_launch,year_of_discontinued,a2,a3 from equipment_master me inner join category c on c.category_id= me.category_id where equipment_master_status=1 and equipment_master_id=? ",equipment_master_id,function(err,equipment_masterresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else
      { 
        res.json({"success":true,'msg':' detail','equipment_masterdata':equipment_masterresult});    
      }      
    });  
  }        
});

module.exports = router;