var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('category_id', 'invalid category_id').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
   con.query("select equipment_master_id,capacity,brand,model,year_of_discontinued,year_of_launch from equipment_master em inner join category c on c.category_id= em. category_id where equipment_master_status=1 and c.category_id=? order by equipment_master_id desc",[req.query.category_id],function(err,result,fields)
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
      res.json({"success":true,'msg':'all equipment_master list ','equipment_masterdata':result});    
    }      
  }); 
}             
});


module.exports = router;