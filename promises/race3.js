//RACE:3
var p5 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, 'five'); 
});
var p6 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, 'reason');
});

Promise.race([p5, p6]).then(function(value) {
    console.log(value)
  // Not called
}, function(reason) {
  console.log(reason); // "six"
  // p6 is faster, so it rejects
});