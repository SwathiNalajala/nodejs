var assert=require('assert');
var abs=require('/home/swathi/Desktop/mocha/abstract');
var user_cont=require('/home/swathi/Desktop/mocha/user_context2');
var rs=require('random-strings')
var r=require('random-number-between')
var seq=rs.random(20,'012');
var userno="user1"
describe("testing modules",function(){
	//var abst;
	//var seq='010011100001'
   	before(function(){
        abst=new abs();      //creating object for abstract class
        user=new user_cont();
        //users={1:new user_cont(),2:new user_cont(),3:new user_cont()}
    });
    for(var i=0;i<seq.length;i++){    
        
        //console.log("user"+userno)
		switch(seq.charAt(i)){

			case '0':
			
				it('testing set method',function(done){
		   			var key=rs.random(1,'as'); //generating random string for key
                    var value=rs.random(5,'value'); // generating random string for value                    
					console.log(key+" "+value)
					abst.set(key,value,userno)
					.then(function(result){
						if(result==key){ //if test case is pass then store those values in user context
                             user.set(key,value,userno);
                             console.log("user"+userno)
						}
						assert.equal(result,key)
					}).then(done,done)
					//console.log(map.get(key))
				})
			break;

			case '1':

				it('testing get method',function(done){
					var key=rs.random(1,'as'); //generating random key to get value
					console.log(userno)    
                    abst.get(key,userno) //getting value of key from specified storage
					.then(function(result){
						var expec=user.get(key,userno) //getting value of key from user context
                        console.log(key+" "+expec+" "+result)
                        console.log("user"+userno)
						assert.equal(result,expec);
			   
					}).then(done,done)
			
				})
			break;

			case '2':
			
				it('changing modules',function(done){
					abst.change(userno)
					.then(function(result){
                        console.log(result);
                        console.log("user"+userno)
						user.change(result,userno)
					}).then(done,done)
				})
			break;
		}
    }
})
