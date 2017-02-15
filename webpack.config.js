module.exports = {
  entry: {
    app: './src/js/core.js',
    styles: ['./src/css/reset.css', './src/css/core.css']
  },
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
      },
      {
        test: /\.css?$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};
