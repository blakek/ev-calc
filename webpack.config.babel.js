import path from 'path'
import cssnext from 'postcss-cssnext'

export default {
  entry: path.resolve('./src/index.js'),

  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src']
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        // Static assets
        test: /\.(gif|svg|otf|eot|ttf|woff[2]?|png|jpe?g)(\?[a-z0-9=.]+)?$/i,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  postcss: () => {
    return [cssnext]
  }
}
