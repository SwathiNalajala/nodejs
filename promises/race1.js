// RACE:1   
var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, 'one'); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 100, 'two'); 
});

Promise.all([p1,p2]).then(function(value) {
  console.log(value); // "two"
  // Both resolve, but p2 is faster
});