var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
// var pool = require('../pool');


// func.auth2
router.get('/',func.auth2,function(req, res, next) 
{
  // pool.getConnection(function(err,con)
  // {
  //   if (err) {
  //     res.json({'success':false,'msg':'db connection failed'});
  //   } 
  //   else{
          con.query("select * from category where category_status=1",function(err,categoryresult,fields)
          {
            // con.release();
             // con.releaseConnection();
            if(err)
            {
              console.log(err);
              res.json({'success':false,'msg':'something went wrong'});
            }
            // else if(result.length==0)
            // {
            //   res.json({"success":true,'msg':'Data Not Available'});
            // }
            else
            {
              res.json({"success":true,'msg':'all category list ','categorydata':categoryresult});    
            }      
          });
        // }               
  // });
});


module.exports = router;