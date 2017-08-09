function* fib()
{
    var a=0;
    var b=1;
    while(true)
        {
            yield a + b;
            b=a+b;
            a=b-a;

        }
}
    var f=fib();
    console.log("out side of loop")
    for(var i=0;i<5;i++){
       console.log("i value"+i);
        var val=f.next();
        
        console.log(val);
        console.log("i value"+i);
    }