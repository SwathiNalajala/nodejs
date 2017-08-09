'use strict'
var mysql=require('mysql');
class mysql1{

    constructor(){
   mysql1.con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root@123",
    database : "dummy"
});
    mysql1.con.connect(function(err){
    if(err){
        throw error;
    }
    console.log("connected");
    })
    }
register (name,mail,password){
   var sql=`insert into users (name,email,password) values ('${name}','${mail}','${password}')`;
    //var sql='show tables'
    mysql1.con.query(sql,function(error,result){
       // if(error){ console.log(error)}
        console.log('1 row added');
       // console.log(error);
    })
}
get (key,mail){
    var sql=`select value from keyvalue where mail='${mail}' and skey='${key}'`
    mysql1.con.query(sql,function(error,result){
        //console.log(result)
        if(error){throw error}
        return result;
    })
}
set(mail,key,value){
    var sql=`insert into keyvalue(mail,skey,value) values('${mail}','${key}','${value}') on duplicate key update value='${value}'`
    mysql1.con.query(sql,function(error,result){
        //console.log(result);
        return 'key,value added';

    })
}
}  
module.exports = mysql1;

