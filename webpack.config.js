const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path : path.resolve(__dirname , './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jpg$/,
        use: ["file-loader"],
      },
      {
        test : /\.js$/, 
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "common.css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    historyApiFallback: true,
  },
};
