module.exports = {
  entry: './src/js/core.js',
  output: {
    path: `${__dirname}/build/`,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
