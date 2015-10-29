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

exports.readListOfUrls = function(callback){
  fs.readFile(this.paths.list, 'UTF-8', function (error, urlList) {
    callback(urlList.split('\n'));
  });
};

exports.isUrlInList = function(targetURL,callback){
  // set up a checker - false
  // save list of urls from exports.readListOfUrls to a variable
  // loop using forEach
  // if item === targetURL
  // checker = true;
  // callback(checker)
};

exports.addUrlToList = function(){
  //fs.appendFile
  //callback();

};

exports.isUrlArchived = function(){
  //set up a var equal to the fs.readdir(jkfsla;ejkl);
  //checker = false
  //use indexOf, if equals to -1 or if length === 0, checker = true;
  //callback(checker)
};

exports.downloadUrls = function(){




};