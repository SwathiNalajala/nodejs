//RACE:4
var p7 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 100, 'seven'); 
});
var p8 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, 'eight');
});

Promise.race([p7, p8]).then(function(value) {
  // Not called
}, function(reason) {
  console.log(reason); // "eight"
  // p8 is faster, so it only got handled
});
