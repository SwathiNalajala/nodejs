//RACE:2
var p3 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 10000, 'three');
});
var p4 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, 'four'); 
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 is faster, so it resolves
}, function(reason) {
  // Not called
  console.log(reason)
});