function getsum(n1,n2)
{
	var promise=new Promise(function(response,reject){
	if(n1<0 || n2 <0)
	{
		reject(Error('negative values not supported'));
	}
	response(n1+n2);
});
return promise;
}
getsum(5,7)
.then(function(result){
	console.log(result)
	return "next then called"},
	function(error){
		console.log(error)})
.then(function(result){
	console.log(result)},
	function(error){
		console.log(error)});
