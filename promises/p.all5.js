var resolvedPromisesArray = [Promise.resolve(1)   
,Promise.resolve(2)                                 
    .then(ret=>{
        console.log('in then '+ret);       
        throw 3;                                // here rejecting promise implicitly   
    }).catch((e)=>{                               // here catching only when rejected
        console.log('catched '+e) ;   return 5;                        
})
                                                                                       
];

var p = Promise.all(resolvedPromisesArray
).then(ret=>{
       // console.log('in then after p.all '+ret);       
        return 6;                               
})
// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);                         // p doesn't contain all values when Promise.all rejected
});                                         // it contains only last handled value


// output log:
// Promise { <pending> }
// in then 2
// catched 3
// in then after p.all 5
// the stack is now empty
// Promise { 6 }
