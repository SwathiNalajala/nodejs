//var mocha=require('mocha')
var assert=require('assert');
var cal=require('/home/swathi/Desktop/mocha/calc.js');
describe('testing add',function(){
    
    it('function returns addition',function(done){
        assert.equal(cal.add(2,3),5);
        done();
    })
    it('function returns multiplication',function(done){
        assert.equal(cal.mul(5,6),30);
        done();
    });
})