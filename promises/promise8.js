function badfunc(url) {
var image;
image.src = url; // Error: image is undefined
return new Promise(function (resolve, reject) {
image.onload = resolve;
image.onerror = reject;
});
}
badfunc('www.google.com')
function goodfunc(url) {
return new Promise(function (resolve, reject) {
var image;
image.src = url; // Error: image is undefined
image.onload = resolve;
image.onload = reject;
});
}
goodfunc('www.google.com')
