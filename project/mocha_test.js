var assert=require('assert');
//var chai=require('chai');
//var expect=chai.expect;
var abs=require('/home/swathi/Desktop/mocha/abstract');
describe("testing modules",function(){
   var abst;
    describe("testing db modules",function(){
        before(function(){
            abst=new abs();
        });
       
        it('testing set method',function(done){
            abst.set('keymocha','valuemocha','mailmocha')
            .then(function(result){
                assert.equal(result,'keymocha');
            }).then(done,done)
         
        })
        it('testing get method',function(done){
            abst.get('keymocha67','mailmocha')
            .then(function(result){
                assert.equal(result,'valuemocha');
                //expect(result).to.equal('valuemocha56');
               
            }).then(done,done)
            
        })

    })
    
})
