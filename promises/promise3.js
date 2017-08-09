Promise.reject(Error("error occured")).then
(console.log("step2")).then(console.log("step3")).catch(function(error){
    console.log(error)
});
//another example
Promise.reject(Error("error occured")).then(
    function step2(){
        console.log("step2 printed");
    }
).then(
    function step3(){
        console.log("step3")
    }
).catch( function(error){
    console.log(error);
}
);