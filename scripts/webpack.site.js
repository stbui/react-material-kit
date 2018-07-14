const path = require('path');
const webpack = require('webpack');
const HappyPack = require('HappyPack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBase = require('./webpack.base');

module.exports = {
  ...webpackBase,
  mode: 'production',
  entry: './src/docs/index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'stbui',
      template: path.resolve('./src/docs/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[id].[chunkhash:8].css',
    }),
    new HappyPack({
      id: 'ts',
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true,
            configFile: path.resolve('./scripts/tsconfig.ems2015.json')
          }
        }
      ]
    })
  ]
};
