const path = require('path');
const webpack = require('webpack');
const HappyPack = require('HappyPack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBase = require('./webpack.base');

module.exports = {
  ...webpackBase,
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/docs/index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'stbui',
      hash: true,
      template: path.resolve('./src/docs/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
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
  ],
  devServer: {
    port: 2048,
    historyApiFallback: true,
    compress: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  }
};
