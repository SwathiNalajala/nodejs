'use strict'
var user_cont=require('./user_context');
var user={1:new user_cont(),2:new user_cont()};
var rs=require('random-strings')
/*map=new Map();
var obj={'user2':'a'}
map.set(obj,'uevaa');
var obj1={'user2':'b'}
map.set(obj1,'evale');
var obj2={'user2':'a'}
console.log(map.get(obj2));
console.log(obj['user2'])
//var obj={'user1':'key1'}
map.set(obj,'value1');
map.set({'user2':'key2'},'value2')
map.set(obj,'value3')
map.forEach(function(value, key) {
    console.log(key + " : " + value);
    console.log(map.get(key))
    console.log(map.get(obj))
});
var wm1=new WeakMap();
var wm2=new WeakMap();
wm1.set('user1','key1');
wm1.set('user1','key2')
console.log(wm1.get(user1));
wm1.set({'a':'b'},'c')
console.log(wm1.get({'a':'b'}))
/*console.log(map.get(obj))
//var obj=new Object();
//obj={'user1':'key1','user2':'key2'}
//console.log(obj['user1']);
//obj2={obj['user1']:'key1'}
var usermap=new Map();
var mainmap=new Map();
usermap.set('user1','key1');
usermap.forEach(function(value,key) {
    console.log(key+"   "+value)
})
var obj={}
obj['user1']={'key1':'value1','key2':'value2','key1':'value3'};
console.log(obj['user1'].key1);
//obj['user1']={'key3':'value3'}
var key3='key3'
obj['user1'].key3='value3'
console.log(obj['user1'].key3);
console.log(obj['user1'].key2);
console.log(obj['user1'].key1);
var user2='user2'
var k='key1'
//Object.defineProperty({writable : true})
obj[user2]=k;
obj[user2].k='value3'
/*var map=new Map();
map.set('user1',map.set("key1","value1"))
console.log(map.get('user1').key1)*/
/*var obj={};
var a='user1';var b='user2';var c='user3';var d='user4';
var key1='key1';var key2='key2';var key3='key3';var key4='key4';
obj[a]={key1:'value1'}
obj[b]={key2:'value2'}
//console.log(obj[a].key1)
obj[a]={key3:'value3'}
//console.log(obj[a].key3)
var obj2={}
obj2={a:{key1:'value1',key2:'value2'}}
//console.log(obj2[a].key1);
var o=new Object;
//o['user1']={'key1':'value1'};
//o['user1']={'key2':'value2'}
//console.log(o['user1'].key2)
o[{'user1':'key1'}]='value1';
o[{'user1':'key2'}]='value2'
//console.log(o[{'user2':'keyyu'}])
//console.log(o[{d:key3}])
//var m=new Map();
//m.set({'user1':'key1'},'value1')
//var r=m.get({'user1':'key1'})
//console.log(r)
//var m2=new Map();
//m2.set(m2.set('user1','key1'),'value1')
//console.log(m2.get(m2.get('user1')))
var o2={};
//o2[a]={key1:'value1'}
o2[b]={}
console.log(o2[a])
//o2[a]={}
if(o2[a]==undefined){
    o2[a]={}
    console.log(o2[a])
}
o2[c]={}
console.log(o2[b].key2)
var key='key1'
o2[c].key='value1'
var key='key2'
o2[c].key='value2'
console.log(o2[c].key2)
console.log(o2[c])
o2[c].key2='value2'
o2[a].key1='value3'
console.log(o2[c].key1)
//console.log(o2[a].key1)

//o2[a].key2='value2'

//console.log(o2[a].key1)
//o2[a].key3='value3'
//o2[b].key1='value1'
//console.log(o2[a].key2)
//console.log(o2[a].key1)
//console.log(o2[a].key3)
//console.log(o2[b].key1)
var m2=new Map();
var m=new Map();
m2.set('user1','key1','value1')
console.log(m2.get('user1','key1'))
m2.set('user1',m.set('key1','value1'))
m2.set('user1',m.set('key2','value2'))
m2.set('user2',m.set('key1','value7'))
m2.set('user2',m.set('key2','value2'))

console.log(m2.get('user1'))
console.log(m2.get('user2'))
m2.set(m.set('user3','key1'),'value1')
m2.set(m.set('user3','key2'),'value2')
//console.log(m2.get(a => 'key2'))
//console.log(m2.get('user3'))
//m2.forEach(function(value,key) {
//    console.log(key+"   "+value)
//})
m2.set(('user4','key4'),'value4')
m2.set(('user4','key5'),'value5')
m2.set(('user6','key6'),('user6','value6'))

console.log(m2.get(('user7','key4')))
console.log(m2.get(('user6','key6')))
var r2=m2.get('user1');
var r3=r2.get('key1')
console.log(r3)
m2.set('user21').set('key1','value1')
console.log(m2.get('key1'))
m2[a]=new Map();
m2[a].set('key1','value1')
console.log(m2[a].get('key7'))
m2.forEach(function(value,key) {
 console.log(key+"   "+value)
    })
*/
var m=new Map();
if(m==undefined){
    console.log('swathi')
}
console.log(m)
if(m['mail']==undefined){
    console.log('yes')
}