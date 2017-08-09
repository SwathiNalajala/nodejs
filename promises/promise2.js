var promise= new Promise(function(resolve,reject){
    //console.log("inside promise constructor");
    resolve();
    console.log("inside promise constructor");

});
promise.then(function(){
    console.log("in side then");
}).then(function(){
    console.log("second then")
});
console.log("out side the promise");