var extend = require('util')._extend;
var con = require('./db');
var edo=require('./edonomix.js');
var jwt = require('jsonwebtoken');
const secret = "supersecretkey";
module.exports = {

    admin: function(req, res) 
    {
       con.query("SELECT adminname as username,admin_full_name as name,admin_email FROM admin where admin_status=1 and admin_id=?",[req.decoded.aid],function(err,result,fields)
      {
        if(err)
        {
          console.log(err);
          res.json({"success":false,'msg':'something wrong'});  
          // return ({});
        }
        else if(result.length==1)
        {
          // return(result);
           res.json({'success':true,'msg':'admin home page','data':result,'token':req.token})        }
        else
        { 
          res.json({"success":false,'msg':'something wrong'});  
          // return ({});  
        }      
      });
    },

   

    logout :function(req,res,next){
        console.log("req.session.cookie.maxAge"+req.session.cookie.maxAge);
        req.session.destroy();
        // console.log(req.session.cookie.maxAge);
        next();
    },
    // auth :function(req,res,next){
    //     if(req.session.adminid){next();}
    //     else{
    //         res.json({"success":false,'msg':'user login page'});
    //        // res.render('admin_login.ejs',{title:'',msg:"Enter username and Password",login_para:0});
    //     }
    // },  
    logauth :function(req,res,next)
    {
      //username and password length and regx check baki he
      console.log(req.ip);
      var user = extend({}, req.body);
      con.query("select *  from user where user_name=?",user.username,function(err,result,fields){
      if(err)
        {      
          console.log(err);
          res.json({'success':false});
        }
       else if(result.length==1)
       {
          if(edo.hashPassword(user.password)===result[0].password)
          {
            var hour = 3600000; 
            req.session.cookie.expires = new Date(Date.now() + hour);
            req.session.cookie.maxAge = hour;
            console.log("req.session.cookie.maxAge"+req.session.cookie.maxAge,req.session.cookie.expires);
            req.session.userid=result[0].user_id;
            next();
          }
          else
          {
            //wrong pass
            res.json({"success":true,'msg':'user login page invalid user name/password'});
          }     
      }
      else
      { 
        console.log("hash"+edo.hashPassword(user.password));
        res.json({"success":true,'msg':'user login page wrong username'});       
      }  
      });
    },
    auth3:function(req,res,next)
    {
      var token =req.cookies.token || req.token;
      if (token) 
      {
        jwt.verify(token,'supersecretkey', function(err, decoded) {
            if (err) 
            {
              res.json({"success":false,'msg':'user login page'});
            }
            req.decoded = decoded;
            req.token=token;
            //expand token time
           // res.cookie('token',token, {maxAge: 60*60*1000, httpOnly: true });
            next(); //no error, proceed
        });
      } 
      else 
      {
        res.json({"success":false,'msg':'user login page'});
      }
    }, 
    auth2:function(req,res,next)
    {
      var token =req.cookies.token || req.token;
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer ') { // Authorization: Bearer g1jipjgi1ifjioj
      // Handle token presented as a Bearer token in the Authorization header
    console.log('--------------------------------------------------------------------------');
    var token = req.headers.authorization.split(' ')[1];
    }
      if (token) 
      {
        jwt.verify(token,'supersecretkey', function(err, decoded) {
            if (err) 
            {
              res.json({"success":false,'msg':'user login page'});
            }
            req.decoded = decoded;
            req.token=token;
            //create new token
            jwt.sign({aid :req.decoded.aid}, secret ,function(err, newtoken)
            {
              if(err){
                console.log(err);
                res.json({"success":false,'msg':'system failure'});
              }
              else
              {
                console.log('new'+newtoken);
                res.cookie('token',newtoken, {maxAge: 60*1000, httpOnly: true });
                // res.access_token=token;
                // req.session.token = token; //optional  
                //req.token = newtoken;  
                next();
              }
        }); });
      } 
      else 
      {
        res.json({"success":false,'msg':'user login page'});
      }
    },   
}         

