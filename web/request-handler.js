var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('./http-helpers.js');
var url = require('url');

exports.handleRequest = function (req, res) {
  var statusCode = 200;
  res.writeHead(statusCode, helper.headers);

  if(req.method === 'GET'){
    if(req.url === "/"){
      var filePath = archive.paths.siteAssets + req.rul;
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
    
  }



  //res.end(archive.paths.list);
};