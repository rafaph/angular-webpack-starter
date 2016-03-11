require('babel-register')({
  ignore: /node_modules/,
  extensions: ['.js']
});

var requireDir = require('require-dir');

requireDir('./tasks', {
  recurse: true
});
