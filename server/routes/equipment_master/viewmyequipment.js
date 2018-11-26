var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{    
  con.query("select equipment_master_id,c.category_name,capacity,brand,model,year_of_launch,year_of_discontinued,a2,a3 from equipment_master me inner join category c on c.category_id= me.category_id where me.equipment_master_status=1 order by equipment_master_id desc ",req.decoded.aid,function(err,equipment_masterresult,fields)
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
      res.json({"success":true,'msg':'all equipment_master list ','equipment_masterdata':equipment_masterresult});    
    }      
  });         
});


module.exports = router;