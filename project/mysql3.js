//This is mysql module
'use strict'
var mysql=require('mysql');
class mysql3{
    //this constructor is to connect with mysql whenever instance create for mysql
    constructor()
    {
        mysql3.con = mysql.createConnection({
        host        : "localhost",
        user        : "root",
        password    : "root@123",
        database    : "dummy"
        });
        mysql3.con.connect(function(err){
            if(err) throw error;   
            console.log("connected");
        });
    }
    /*register (name,mail,password,callback){
        var sql=`insert into users (name,email,password) values ('${name}','${mail}','${password}')`;
        mysql3.con.query(sql,function(error,result){
            if(error){ callback(error)}
            else    callback(null,result);
       // console.log(error);
    })
    }*/
    //this is get method for getting values of specified key
    get (key,mail)
    {
        //create promise to make asynchronous 
        var promise=new Promise(function(resolve,reject){
            var sql=`select value from keyvalue where mail='${mail}' and skey='${key}'`
            mysql3.con.query(sql,function(error,result){
                if(error){reject(error)}
                else if (result.length)resolve(result[0].value)
                else resolve(undefined);
            })
        })
        return promise;
    }
    //this method is for to set values in db
    set(key,value,mail)
    {
        var promise=new Promise(function(resolve,reject){
            var sql=`insert into keyvalue(mail,skey,value) values('${mail}','${key}','${value}') on duplicate key update value='${value}'`
            mysql3.con.query(sql,function(error,result){
                if(error){reject(error)}
                else resolve(key);

            })
        })
        return promise;
    }
}  
module.exports = mysql3;


