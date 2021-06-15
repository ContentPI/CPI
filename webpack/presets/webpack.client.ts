// Dependencies
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackBar from 'webpackbar'

const webpackClientConfig: (args: { mode: string }) => Configuration = ({ mode }) => {
  const isProduction = mode === 'production'
  const title = 'ContentPI'

  const webpackConfig: Configuration = {
    entry: {
      main: './src/client/index.tsx'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template: './src/client/index.html',
        filename: './index.html'
      }),
      new WebpackBar({
        name: 'client',
        color: '#2EA1F8'
      })
    ]
  }

  if (isProduction) {
    webpackConfig.output = {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }

    webpackConfig.plugins = [...(webpackConfig.plugins || [])]
  } else {
    webpackConfig.output = {
      publicPath: `http://localhost:3001/`
    }
  }

  return webpackConfig
}

export default webpackClientConfig
