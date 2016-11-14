import { resolve } from 'path'
import webpack from 'webpack'
import baseConfig from './webpack.config.babel'

export default {
  ...baseConfig,

  devtool: 'eval-source-map',

  plugins: [
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime/runtime'
    })
  ],

  devServer: {
    contentBase: resolve('./templates'),
    hot: true
  }
}
