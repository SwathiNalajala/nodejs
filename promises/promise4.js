function settled(promises) {
var alwaysFulfilled = promises.map(function (p) {
return p.then(
function onFulfilled(value) {
return { state: 'fulfilled', value: value };
},
function onRejected(reason) {
return { state: 'rejected', reason: reason };
}
);
});
return Promise.all(alwaysFulfilled);
}
// Update status message once all requests finish
settled(['a','b','c']).then(function (outcomes) {
var count = 0;
outcomes.forEach(function (outcome) {
if (outcome.state == 'fulfilled') count++;
});
console.log(count + ' out of ' + outcomes.length + ' balances were updated');
});

