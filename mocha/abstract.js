//this is abstract module.
//In this we merge both db and local modules for setting and getting values
'use strict'
var mysql = require('/home/swathi/Desktop/mocha/mysql3');//requiring mysql module
var local = require('/home/swathi/Desktop/mocha/local');//requiring local module
//var storage;
//var store_local;
//var store_mysql;
class abstract
{

    constructor(store)
    {
        this.store_local=new local();
        this.store_mysql=new mysql();
        if(store=='db')
             this.storage=this.store_mysql;
        else
             this.storage=this.store_local;
    }
    //to get value of specified key from specified storage module
    get(key,mail)
    { 
        //to access this.storage value in promise I stored that value in variable s
        if(this.storage[mail]==undefined) var s=this.store_local
        else var s=this.storage[mail]; 
        //creating promise and called get method from required storage module in promise
        var promise=new Promise(function(resolve,reject) 
        {
            s.get(key,mail)
            .then(function(result){
                     resolve(result)},
                  function(error){
                     reject(error)});
        })
            return promise;
    }
    // store key,value in specified storage
    set(key,value,mail)
    {
        //creating promise and called get method from required storage module in promise
        if(this.storage[mail]==undefined) var s=this.store_local
            else var s=this.storage[mail]; 
         //var s=this.storage[mail];
         //creating promise and called get method from required storage module in promise
         var promise=new Promise(function(resolve,reject)
         {
            s.set(key,value,mail)
            .then(function(result){
                    resolve(result)},
                  function(error){
                    reject(error)});
         })
         return promise;
    }
    // this method is for to change storing location
    change(mail)
    {
        var s=this.storage[mail];
        var l=this.store_local;
        var d=this.store_mysql;
        var promise=new Promise(function(resolve,reject)
        {
            if(s instanceof mysql){
                s=l;
                resolve('local');
            }
            else{
                s=d
                resolve('db')
            }
        })
        this.storage[mail]=s;
        return promise;
    }
}
module.exports=abstract;