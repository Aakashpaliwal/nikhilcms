// warning :update may cause critical issue
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
  if(typeof(req.body.amc_equip_id)!='object')
  {
    //amc
    req.check('startDate','invalid start Date').isISO8601();
    req.check('total_price','invalid total price').isNumeric({min:0});
    req.check('amc_id','invalid amc').isInt({min:1});
    //amc equip
    req.check('amc_equip_id','invalid amc_equip').isInt({min:0});
    req.check('frequency','invalid frequency').isIn([3,6,12]);
    req.check('price','invalid price').isNumeric({min:0});

    var verrs=req.validationErrors();
    if(verrs)
    {
      res.json({ success:false,msg: verrs[0].msg,});
    }
    else
    {
      var amc = 
      {
        // equipment_id:req.body.equipment_id,
        // frequency:req.body.frequency,
        total_price:req.body.total_price,
        //site_id:req.body.site_id,
        startDate:req.body.startDate,
        createdby:req.decoded.aid
      };
      // amc.nextdate=edo.nextDate(amc.startDate,amc.frequency);
      con.query("update amc SET ? where amc_id=? and status=1 ;",[amc,req.body.amc_id],function(err,amcresult)
      {
        if(err)
        {
          console.log(sql,err);
          res.json({success:false,msg: 'something went wrong',});
        }
        else
        {
          // if(amcresult["affectedRows"]==1)
          // {
              var amc_equip_id= req.body.amc_equip_id;
              var amc_equip = 
              {
               // amc_equipment_id:req.body.amc_equip_id,
                frequency:req.body.frequency,
                price:req.body.price,
               // amc_id:amcresult["insertId"],
                nextDate:edo.nextDate(amc.startDate,req.body.frequency)
              };
             con.query("update amc_equip SET ? where amc_equip_id =? ;",[amc_equip,amc_equip_id],function(err,result)
            {
              if(err)
              {
                //you have to roll back previous quary
                console.log(sql,err);
                res.json({success:false,msg: 'something went wrong',});
              }
              else
              {
                res.json({ success:true,msg: 'succesful update', });
              }
            });
          // }
        }
      });
    } 
  }
  else
  {
      var amc_equip=
      { "amc_equip_id":req.body.amc_equip_id,
        "frequency":req.body.frequency,
        "price":req.body.price,
      }
      var index=1;
      for (var key in amc_equip) 
      {
        if(amc_equip[key].length !=amc_equip['amc_equip_id'].length)
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
          req.check('amc_equip_id.*','invalid equipment').isInt({min:1});
          req.check('amc_equip_id','invalid equipment').isArray();
          req.check('frequency.*','invalid frequency').isIn([3,6,12]);
          req.check('frequency','invalid frequency').isArray();
          req.check('price.*','invalid price').isNumeric();
          req.check('price','invalid price').isArray();

          req.check('startDate','invalid startDate').isISO8601();
          req.check('total_price','invalid total price').isNumeric({min:0});
          req.check('amc_id','invalid amc').isInt({min:1});
           var verrs=req.validationErrors();
          if(verrs)
          {
          res.json({ success:false,msg: verrs[0].msg,msg2:'hii'});
          }
          else
          { 
            var amc={
              startDate:req.body.startDate,
              total_price:req.body.total_price,
              //site_id:req.body.site_id,
              createdby:req.decoded.aid
            } 
            con.query("update amc SET ? where amc_id=? and status=1 ;",[amc,req.body.amc_id],function(err,result)
            {
               if(err)
              {
                console.log(err);
                res.json({success:false,msg: 'something went wrong',});
              }
              else
              {
                  var amc_equip=
                  {
                    amc_equip_id:req.body.amc_equip_id,
                    frequency:req.body.frequency,
                    price:req.body.price,
                // amc_id:amcresult["insertId"],
                // nextDate:edo.nextDate(amc.startDate,req.body.frequency)
                }
                var arr=new Array();
                var sql="";
                for(let myKey=0,i=0;myKey<amc_equip.amc_equip_id.length;myKey++,i=i+2) 
                  {
                    var obj={};
                    //obj.amc_equip_id=amc_equip.amc_equip_id[myKey];
                    obj.frequency=amc_equip.frequency[myKey];
                    obj.price=amc_equip.price[myKey];
                    obj.nextdate=edo.nextDate(amc.startDate,amc_equip.frequency[myKey]);
                   // obj.amc_id=result["insertId"];
                    arr[i]=obj;
                    arr[i+1]=amc_equip.amc_equip_id[myKey];
                    var sql=sql+"update amc_equip SET ? where amc_equip_id =? ;";         
                  } 
                 con.query(sql,arr,function(err,results){
                     if(err)
                    {
                      //roll back previous sql
                      console.log(sql,err);
                      res.json({success:false,msg: 'something went wrong',});
                    }
                    else
                    {
                      res.json({ success:true,msg: 'succesful updated', });
                    }
                 });     
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