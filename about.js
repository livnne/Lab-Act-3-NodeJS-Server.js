var p = require('./person.js');
let p1 = new person('John', 'Smith');

module.exports =
  'Hello ' +
  p1.fuName() +
  '. This activity will teach on how to deal with a simple server and local modules in Node.js';
