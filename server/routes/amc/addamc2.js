var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
var expressValidator = require('express-validator');

router.use(expressValidator({
  customValidators: {
     isArray: function(value) {
        return Array.isArray(value);
     },
     notEmpty: function(array) {
        return array.length > 0;
     },
     gte: function(param, num) {
        return param >= num;
     }
  }
}));

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add amc page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  if(typeof(req.body.equipment_id)!='object')
  {
    req.check('equipment_id','invalid equipment_id').isNumeric();
    req.check('frequency','invalid frequency').not().isEmpty().isNumeric();
    req.check('price','invalid price').isLength({min:1,max:10}).isNumeric();
    req.check('startDate','invalid startDate').not().isEmpty();
    var verrs=req.validationErrors();
    if(verrs)
    {
      res.json({ success:false,msg: verrs[0].msg,});
    }
    else
    {
      var amc = 
      {
        equipment_id:req.body.equipment_id,
        frequency:req.body.frequency,
        price:req.body.price,
        startDate:req.body.startDate,
        createdby:req.decoded.aid
      };
      amc.nextdate=edo.nextDate(amc.startDate,amc.frequency);
      con.query("Insert into amc SET ? ;",amc,function(err,result)
      {
        if(err)
        {
          console.log(sql,err);
          res.json({success:false,msg: 'something went wrong',});
        }
        else
        {
          res.json({ success:true,msg: 'succesful entry', });
        }
      });
    } 
  }
  else
  {
      var amc={};
      amc=req.body;
      var index=1;
      for (var key in amc) 
      {
        if(amc[key].length !=amc['equipment_id'].length)
          index=0;
      }
      if(index)
      {
         // for(let key=0;key<amc.equipment_id.length;key++) 
         //  {
         //    req.check('equipment_id['+key+']','invalid equipment'+key-0+1).isNumeric();
         //    req.check('frequency['+key+']','invalid frequency'+key-0+1).not().isEmpty().isNumeric();
            // req.check('price['+key+']','invalid price'+key-0+1).isLength({min:1,max:10}).isNumeric();
            // req.check('startDate['+key+']','invalid startDate'+key-0+1).not().isEmpty();
          // } 
          req.check('equipment_id.*','invalid equipment').isInt();
          req.check('equipment_id','invalid equipment').isArray();
          // req.check('frequency.*','invalid frequency').isLength({ min: 1 });
          req.check('frequency.*','invalid frequency').isInt({ min: 2 });
          req.check('frequency','invalid frequency').isArray();
          req.check('price.*','invalid price').isNumeric();
          req.check('price','invalid price').isArray();
          req.check('startDate.*','invalid startDate').isISO8601();
          req.check('startDate','invalid startDate').isArray();
           var verrs=req.validationErrors();
          if(verrs)
          {
          res.json({ success:false,msg: verrs[0].msg,msg2:'hii'});
          }
          else
          {
            var arr=new Array();
            var sql="";
            for(let myKey=0;myKey<amc.equipment_id.length;myKey++) 
              {
                var obj={};
                obj.equipment_id=amc.equipment_id[myKey];
                obj.frequency=amc.frequency[myKey];
                obj.price=amc.price[myKey];
                obj.startDate=amc.startDate[myKey];
                obj.nextdate=edo.nextDate(amc.startDate[myKey],amc.frequency[myKey]);
                obj.createdby=req.decoded.id;
                arr[myKey]=obj;
                var sql=sql+"Insert into amc set ? ;";         
              } 
             con.query(sql,arr,function(err,results){
                 if(err)
                {
                  console.log(sql,err);
                  res.json({success:false,msg: 'something went wrong',});
                }
                else
                {
                  res.json({ success:true,msg: 'succesful entry', });
                }
             }); 
          }
      }
      else
      {
        res.json({success:false,msg: 'data not proper'});
      }
  }	   
});


module.exports = router;