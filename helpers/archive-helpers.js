var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
var sites;

fs.readFile(this.paths.list, 'UTF-8', function (error, urlList) {
  sites = urlList.split('\n');
});

exports.readListOfUrls = function(callback){
  callback(sites);
};

exports.isUrlInList = function(targetURL,callback){
  var result = false;
  sites.forEach(function(index, item){
    if(item === targetURL){
      result = true;
    }
  });
  callback(result);
};

exports.addUrlToList = function(targetURL, callback){
  fs.appendFile(this.paths.list, targetURL + "\n");
  callback();
};

exports.isUrlArchived = function(targetURL, callback){
  var archived = fs.readdir(this.paths.archivedSites, function(error, urlList){
    var result = false;
    if(urlList.length > 0){
      if(urlList.indexOf(targetURL) !== -1){
        result = true;
      }
    }
    callback(result);
  })
};

exports.downloadUrls = function(){




};