const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.slim' }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/     , use: [ MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.s[ac]ss$/i, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.slim$/    , use: [ 'html-loader', path.resolve('slim-loader') ] },
    ],
  },
};
