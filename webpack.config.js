const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
}
