const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require("core-js/stable");
require("regenerator-runtime/runtime");

const rootdir = __dirname;
const srcdir = path.join(rootdir, '/src');

module.exports = {
  entry: ['./src/index.tsx'],
  devtool: 'true',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: `${rootdir}/dist`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { fix: true, configFile: '../../tslint.json' }
      },
      {
        test: /\.(tsx|ts)$/,
        loader: 'awesome-typescript-loader',
        options : {
          reportFiles: [
            'src/**/*.{ts, tsx}'
          ],
          useBabel: true,
          transpileOnly: false,
          babelCore: '@babel/core',
          babelOptions: {
            babelrc: false,
            presets: ["@babel/preset-env"]
          },
        },
      },
    ]
  },
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: `${rootdir}/dist`,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcdir}/index.html`
    }),
  ]
}
