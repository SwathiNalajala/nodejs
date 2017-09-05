//this module for setting and getting values from local
'use strict'
class local {
    constructor()
    {
        local.map=new Map();
        //local.map2=new Map();
    }
    // this method is for to set key,value in local
    set(key,value,mail)
    {
        var promise=new Promise(function(resolve,reject){
            if(local.map[mail]==undefined){
                local.map[mail]=new Map();
            }
               //local.map.set(mail,local.map[mail].set(key,value));
            local.map[mail].set(key,value)
            resolve(key);
        })
        return promise;
    }
    //this method is to get values from local for specified key
    get(key,mail)
    {
        var promise=new Promise(function(resolve,reject){
            if(local.map[mail]==undefined){
                resolve(undefined);
            }
            var result;
            result=local.map[mail].get(key);
                //console.log("result "+ result )
            resolve(result);
        })
        return promise;
    }

}

module.exports=local;