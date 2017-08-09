var array=[1,2,3,4,5];
var sum=array.reduce(function(sum,number){
    
    console.log(sum+" "+number);
    console.log(array);
    return sum+number;
},0);
console.log(sum);
