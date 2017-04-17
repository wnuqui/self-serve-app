var path = require('path')
var webpack = require('webpack')

const VENDOR_LIBS = [
  'body-parser',
  'history',
  'isomorphic-fetch',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-thunk',
  'routes'
];

module.exports = {
  entry: {
    webpackhotmiddleware: 'webpack-hot-middleware/client',
    bundle: './client',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3001)
    },
    host: '127.0.0.1'
  }
}