var p1 = new Promise(function(resolve, reject) { 
    setTimeout(
        resolve, 100, 'ret'); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 100, 'two'); 
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // p1 resolve lately but not stopped due to p2 since they are independent
});
p1.then(()=>{
    console.log('after p1');
})