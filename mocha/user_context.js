'use strict'
class user_context{
    constructor(){
        this.localmap=new Map();
        this.dbmap=new Map();
        this.map=this.localmap;
    }
    set(key,value)
    {
               this.map.set(key,value);
                
    
    }
    //this method is to get values from local for specified key
    get(key)
    {
          return  this.map.get(key);
    }
}
module.exports=user_context;