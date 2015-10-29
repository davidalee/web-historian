var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback, method) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  
  fs.readFile(asset, function(error, content) {
    if(method === 'POST'){
      res.writeHead(302, headers);
      callback(res, content);
    }
    if( !content ){
      res.writeHead(404, headers);
      callback(res, 'You requested a non-existent site, fool!');
    } else {
      res.writeHead(200, headers);
      callback(res, content);
    }
  });
};



// As you progress, keep thinking about what helper functions you can put here!
