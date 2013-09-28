var fs = require('fs');

module.exports.detect = function()
{
  return ["jpg", "png", "gif"];
};

module.exports.ext = function()
{
  return null;
};

module.exports.compile = function(file, options, callback)
{
  fs.readFile(file, function(err, data) {
    if (err) console.log(err);

    callback(err, data);
  });
};
