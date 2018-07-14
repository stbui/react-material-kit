const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, '../site'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [' ', '.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['happypack/loader?id=ts'],
        include: [path.resolve('src/components'), path.resolve('src/docs')]
      },
      {
        test: /\.scss$/,
        use: [
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              outputStyle: 'compact'
            }
          }
        ]
      }
    ]
  }
};
