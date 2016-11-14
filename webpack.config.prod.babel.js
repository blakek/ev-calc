import webpack from 'webpack'
import baseConfig from './webpack.config.babel'

export default {
  ...baseConfig,

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime/runtime'
    })
  ]
}
