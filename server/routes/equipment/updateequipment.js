var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add equipment page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
 req.check('serial_number','invalid serial_number ').isLength({min:1,max:100});
  req.check('site_id','invalid site').isInt({min:0});
  req.check('equipment_master_id','invalid equipment').isInt({min:0});
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var equipment = 
    {
      site_id:req.body.site_id,
      equipment_master_id:req.body.equipment_master_id,
      equipment_serial_number:req.body.serial_number,
      equipment_position:req.body.equipment_position,
      po_type:req.body.po_type,
      commission_report_number:req.body.commission_report_number,
      commission_date:req.body.commission_date,
      installation_date:req.body.installation_date,
      invoice_date:req.body.invoice_date,
      invoice_number:req.body.invoice_number,
      equipment_createdby:req.decoded.aid
    };
    con.query("select equipment_id from equipment where equipment_serial_number=? and equipment_id != ? and equipment_status=1",[equipment.equipment_serial_number,req.body.id],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
        con.query("update equipment SET ? where equipment_id=? and equipment_status=1 ;",[equipment,req.body.id],function(err,equipmentresult,fields)
        {
          if(err)
          {
            console.log(sql,err);
            res.json({success:false,msg: 'something went wrong',});
          }
          else
          {
            if(equipmentresult["affectedRows"]==1)
            res.json({"success":true,'msg':'equipment updated'});
            else
            res.json({"success":false,'msg':'invalid operation'});         
          }
        });
      }
      else
      { 
        res.json({success:false,msg:'equipment serial number is not allowed'}) ;    
      }      
    });
  }		   
});


module.exports = router;