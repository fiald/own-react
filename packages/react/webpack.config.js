const path = require('path');

require("core-js/stable");
require("regenerator-runtime/runtime");

const rootdir = __dirname;
const srcdir = path.join(rootdir, '/src');

module.exports = {
  entry: ['./src/index.ts'],
  devtool: 'true',
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  output: {
    path: `${rootdir}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { fix: true }
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        options : {
          reportFiles: [
            'src/**/*.{ts,tsx}'
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
  }
}
