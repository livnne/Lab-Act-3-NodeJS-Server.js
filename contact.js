var p = require('./person.js');
let p1 = new person('John', 'Smith');
module.exports =
  p1.fuName() +
  ' if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/node.js/node.js-tutorials';
