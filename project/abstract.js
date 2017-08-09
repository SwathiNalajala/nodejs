'use strict'
var mysql = require('/home/swathi/Desktop/project/mysql1');
var local=require('/home/swathi/Desktop/project/local');

class abstract{
    constructor(store){
        if(this.store=='local'){
            this.storage=new mysql();
        }
        else
            this.storage=new local();

    }
    get(key,mail){
        return this.storage.get(key,mail);
    }
    set(key,value,mail){
        return this.storage.set(key,value,mail);
    }
}

module.exports=abstract;