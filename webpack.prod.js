const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "js/[name].[contentHash].min.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].[contentHash].min.css" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader',
          options: {
            pretty: false
          }
        }]
      }
    ]
  }
});