'use strict'
class local {
    constructor(){
        local.map=new Map();
    }
    set(key,value){
        local.map.set(key,value)
    }
    get(key,mail){
        var result;
        result=local.map.get(key);
        return result;
    }
}
module.exports=local;