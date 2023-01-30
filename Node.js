var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    let msg = require('./root.js');
    var p = require('./person.js');
    let p1 = new p('John', 'Smith');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html>' +
        '<body>' +
        '<h1>Welcome to my Node.js application</h1>' +
        '<p>' +
        msg +
        '</p>' +
        '</body>' +
        '<html/>'
    );
    res.end();
  } else if (req.url == '/about') {
    let msg = require('./about.js');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html>' +
        '<body>' +
        '<h1>This is the About Page</h1>' +
        '<p>' +
        msg +
        '</p>' +
        '</body>' +
        '<html/>'
    );
    res.end();
  } else if (req.url == '/contact') {
    let msg = require('./contact.js');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html>' +
        '<body>' +
        '<h1>This is the Contact Page</h1>' +
        '<p>' +
        msg +
        '</p>' +
        '</body>' +
        '<html/>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html>' +
        '<body>' +
        '<h1>This is the Gallery Page</h1>' +
        '</body>' +
        '<html/>'
    );
    res.end();
  } else {
    res.end('Invalid request.');
  }
});

server.listen(100);
console.log('Node.js is running');
