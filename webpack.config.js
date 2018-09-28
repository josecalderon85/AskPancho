const path = require('path');

module.exports = {
  entry: [
    './client/src/Index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: [
          'babel-loader'
        ],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: require.resolve('svg-react-loader'),
            options: {
              xmlnsTest: /^xmlns.*$/
            }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.svg']
  },

  devServer: {
    contentBase: './client/dist',
    host: 'localhost',
    historyApiFallback: true,
    // respond to 404s with index.html
    inline: true
  }
};
