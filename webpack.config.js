const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
		{
        test: /\.(png|jpg|gif|eot|ttf|svg|woff|wff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
      ]
    },
	plugins: [new HtmlWebpackPlugin(
	{
		template:'./src/index.html'
	})]
};