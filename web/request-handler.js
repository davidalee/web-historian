var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('./http-helpers.js');
var url = require('url');

exports.handleRequest = function (req, res) {
  var statusCode = 200;
  res.writeHead(statusCode, helper.headers);

  if(req.method === 'GET'){
    if(req.url === "/"){
      var filePath = archive.paths.siteAssets + req.url;
      if(req.url === "/"){
        filePath = archive.paths.siteAssets + '/index.html';
      }
      helper.serveAssets(res, filePath, function(res, content){
        res.end(content);
      });

    } else {
      var sitePath = archive.paths.archivedSites + req.url;
      helper.serveAssets(res, sitePath, function(res, content){
        res.end(content);
      })
    }
  }

  if(req.method === 'POST'){
    req.on('data', function(content){

      archive.addUrlToList(content, function(){});
    });
    helper.serveAssets(res, filePath, function(){
      res.end();}, 'POST');
  
}
  // request
  //           .post("/")
  //           .send({ url: url })

  //res.end(archive.paths.list);
};



// from townhall... re: cron + echo-ing
// echo "running" + $data >> /Users/fred/cronlog
// 40 8 * * * /bin/bash -l -c 'cd /path/to/toolbox && git pull -q'