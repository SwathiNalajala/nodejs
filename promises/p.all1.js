var resolvedPromisesArray = [Promise.resolve(1)   // first element in array
,Promise.resolve(2)                                 //  second element in array 
    .then(ret=>{console.log('in then '+ret);       
    return 3})                                                                                    
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
// the stack is now empty
// Promise { [ 1, 3 ] }
