var assert=require('assert');
//var chai=require('chai');
//var expect=chai.expect;
var abs=require('/home/swathi/Desktop/mocha/abstract');
//var sequence='1101010212'
var localmap=new Map(); //for user context which are stored in local
var dbmap=new Map(); // for user context which are stored in db
var map=localmap;
var rs=require('random-strings')
var sequence=rs.random(30,'012'); //generating random string for sequence of actions 
describe("testing modules",function(){
	var abst;
	var seq=sequence;
   	before(function(){
		abst=new abs();      //creating object for abstract class
	});
    for(var i=0;i<seq.length;i++){      
		switch(seq.charAt(i)){
			case '0':
				it('testing set method',function(done){
		   			var key=rs.random(2,'jh'); //generating random string for key
		   			var value=rs.random(5,'value'); // generating random string for value
					//console.log(key+" "+value)
					abst.set(key,value,'mailmocha')
					.then(function(result){
						
						if(result==key){ //if test case is pass then store those values in user context
						 	map.set(key,value);
						}
						assert.equal(result,key)
					}).then(done,done)
					//console.log(map.get(key))
				})
			break;
			case '1':
				it('testing get method',function(done){
					var key=rs.random(2,'jh'); //generating random key to get value
					abst.get(key,'mailmocha') //getting value of key from specified storage
					.then(function(result){
						var expec=map.get(key) //getting value of key from user context
						//console.log(key+" "+expec+" "+result)
						assert.equal(result,expec);
			   
					}).then(done,done)
			
				})
			break;
			case '2':
				it('changing modules',function(done){
					abst.change()
					.then(function(result){
						console.log(result);
						if(result=='local'){
							map=localmap;
						}
						else if(result=='db'){
							map=dbmap;
						}
					}).then(done,done)
				})
			break;
		}
	}
})
