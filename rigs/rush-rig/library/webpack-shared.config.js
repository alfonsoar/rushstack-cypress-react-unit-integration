'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * If the "--production" command-line parameter is specified when invoking Heft, then the
 * "production" function parameter will be true.  You can use this to enable bundling optimizations.
 */
function createWebpackConfig({ production }) {
  const webpackConfig = {
    // Documentation: https://webpack.js.org/configuration/mode/
    mode: production ? 'production' : 'development',
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [require.resolve('style-loader'), require.resolve('css-loader')]
        }
      ]
    },
    entry: {
      index : path.join(process.cwd(), 'lib', 'index.js')

    },
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name]_[contenthash].js'
    },
    performance: {
      // This specifies the bundle size limit that will trigger Webpack's warning saying:
      // "The following entrypoint(s) combined asset size exceeds the recommended limit."
      maxEntrypointSize: 250000,
      maxAssetSize: 250000
    },
    devServer: {
      port: 9000
    },
    devtool: production ? undefined : 'source-map',
    plugins: [
      // See here for documentation: https://github.com/jantimon/html-webpack-plugin
      new HtmlWebpackPlugin({
        template: 'assets/index.html'
      })
    ]
  };

  return webpackConfig;
}

module.exports = createWebpackConfig;
