
var mysql=require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root@123",
    database : "dummy"
});
con.connect(function(err){
    if(err){
        throw error;
    }
    console.log("connected");

   var sql="insert into users (name,email,password) values ('s','dweasd','dwef')";
    //var sql='show tables'
    con.query(sql,function(result,error){
       // if(error){ console.log(error)}
        console.log(result);
       // console.log(error);
    })
})
