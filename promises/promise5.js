var products = ['sku-1', 'sku-2', 'sku-3'];
products.forEach(function (sku) {
getInfo(sku).then(function (result,error) {
console.log(sku+'information');
});
});
function getInfo(sku) {
console.log('Requested info for ' + sku);
var promise=new Promise(function(resolve,reject){
    resolve('got information');
});
//return ajax('info');
}