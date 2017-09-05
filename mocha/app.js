var express = require('express');
var app = express();
var path = require('path');
var abst=require('./abstract')
var abs=new abst();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/set.html'));
});
app.post('/set',function(req,res){
    if(req.body.mail==undefined||req.body.key==undefined||req.body.value==undefined){
        res.send("enter all feilds")
    }
    else{
        abs.set(req.body.key,req.body.value,req.body.mail)
        .then(function(result){
            res.send("succeffully set"+result)
        },function(error){
            res.send(error)
        })
    }
} )
app.post('/get',function(req,res){
    if(req.body.mail==undefined||req.body.key==undefined){
        res.send("enter all feilds")
    }
    else{
        abs.get(req.body.key,req.body.mail)
        .then(function(result){
            if(result==undefined)
                res.send("key not yet set")
            else
                res.send("successfully got result"+result)
        },function(error){
            res.send(error)
        })
    }
} )
app.post('/storage',function(req,res){
    if(req.body.mail==undefined)
        res.send("enter all feilds")
    else{
        abs.change(req.body.mail)
        .then(function(result){
            res.send("successfully changed storage to "+result)
        },function(error){
            res.send("try again")
        })
    }
})

app.listen(1876);
