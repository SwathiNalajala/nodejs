//this module for setting and getting values from local
'use strict'
class local {
    constructor()
    {
        local.map=new Map();
    }
    // this method is for to set key,value in local
    set(key,value)
    {
        var promise=new Promise(function(resolve,reject){
                local.map.set(key,value);
                resolve(key);
        })
        return promise;
    }
    //this method is to get values from local for specified key
    get(key)
    {
       
        var promise=new Promise(function(resolve,reject){
                var result;
                result=local.map.get(key);
                resolve(result);
        })
        return promise;
    }

}

module.exports=local;