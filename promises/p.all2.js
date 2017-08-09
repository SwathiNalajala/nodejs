var resolvedPromisesArray = [Promise.resolve(1)   
,Promise.resolve(2)                                 
    .then(ret=>{
        console.log('in then '+ret);       
        throw 3;             // here rejecting promise implicitly
    })                                    
                                               
];

var p = Promise.all(resolvedPromisesArray)

// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});


// output log:
// Promise { <pending> }
// in then 2
// (node:11060) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): 3
// the stack is now empty
// Promise { <rejected> 3 }
