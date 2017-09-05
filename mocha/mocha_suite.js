//import Mocha from 'mocha';
var Mocha=require('mocha')
var expect=require('chai').expect;
const Test = Mocha.Test;
const Suite = Mocha.Suite;
const mocha = new Mocha();

var tests = { todo:
  [ { name: 'POST /todos',
      should: 'create a new todo',
      method: 'POST',
      endpoint: '/todos',
      body: [Object] } ] };

for (var s in tests) {
  var suite = Suite.create(mocha.suite, s);
  tests[s].forEach((test) => {
      console.log('add test', test.name);
      suite.addTest(new Test(test.name, () => {
          expect(1+1).to.equal(2);
      }));
  });
}
mocha.run();