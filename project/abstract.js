//this is abstract module.
//In this we merge both db and local modules for setting and getting values
'use strict'
var mysql = require('/home/swathi/Desktop/mocha/mysql3');//requiring mysql module
var local = require('/home/swathi/Desktop/mocha/local');//requiring local module
var storage;
var store_local;
var store_mysql;
class abstract
{

    constructor(store)
    {
        store_local=new local();
        store_mysql=new mysql();
        if(store=='db')
             storage=store_mysql;
        else
             storage=store_local;
    }
    //to get value of specified key from specified storage module
    get(key,mail)
    { 
        //to access this.storage value in promise I stored that value in variable s
       // var s=this.storage; 
        //creating promise and called get method from required storage module in promise
        var promise=new Promise(function(resolve,reject) 
        {
            storage.get(key,mail)
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
         //var s=this.storage;
         //creating promise and called get method from required storage module in promise
         var promise=new Promise(function(resolve,reject)
         {
            storage.set(key,value,mail)
            .then(function(result){
                    resolve(result)},
                  function(error){
                    reject(error)});
         })
         return promise;
    }
    // this method is for to change storing location
    change()
    {
        //var s=this.storage;
        var promise=new Promise(function(resolve,reject)
        {
            if(storage instanceof mysql){
                storage=store_local;
                resolve('local');
            }
            else{
                storage=store_mysql
                resolve('db')
            }
        })
        return promise;
    }
}
module.exports=abstract;