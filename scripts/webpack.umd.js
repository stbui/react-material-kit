const path = require('path');
const webpack = require('webpack');
const HappyPack = require('HappyPack');
const { version } = require('../package');

module.exports = {
  mode: 'production',
  entry: {
    stbui: ['./src/components/index.tsx']
  },
  output: {
    library: 'stbui',
    libraryTarget: 'umd',
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['happypack/loader?id=ts'],
        include: [path.resolve('src/components'), path.resolve('src/components')]
      }
    ]
  },
  resolve: {
    extensions: [' ', '.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  plugins: [
    new HappyPack({
      id: 'ts',
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true
          }
        }
      ]
    }),
    new webpack.BannerPlugin(`
stbui v${version}
@license
Copyright Stbui All Rights Reserved.
https://github.com/stbui
`)
  ]
};
