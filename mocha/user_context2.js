'use strict'
class user_context2{
    constructor(){
        this.localmap=new Map();
        this.dbmap=new Map();
        this.map=new Map();
    }
    set(key,value,mail)
    {
        if(this.map[mail]==undefined)
        {
            //console.log('every time entering')
            this.localmap[mail]=new Map();
            this.map[mail]=this.localmap[mail];
        }
        this.map[mail].set(key,value);
                
    
    }
    //this method is to get values from local for specified key
    get(key,mail)
    {
        if(this.map[mail]==undefined)
        {
            return undefined;
        }
       // else if(this.map[mail].this.dbmap==undefined){ this.map[mail]=this.localmap[mail]}
        return  this.map[mail].get(key);
    }
    change(storage,mail)
    {
        if(storage=='local')
        {
            if(this.localmap[mail]==undefined) 
                this.localmap[mail]=new Map();
            this.map[mail]=this.localmap[mail];
        }
        else
        {
            if(this.dbmap[mail]==undefined) 
                this.dbmap[mail]=new Map();
            this.map[mail]=this.dbmap[mail];
        }
    }
}
module.exports=user_context2;