export default {
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [{
    	test: /\.js$/,
    	exclude: [/node_modules/],
    	loader: 'babel-loader'
    }, {
    	test: /\.html$/,
    	loader: 'raw'
    }, {
      test: /\.css$/,
      loader: "css-loader"
    }]
  }
};
