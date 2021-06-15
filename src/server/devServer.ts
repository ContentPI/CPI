// Dependencies
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import path from 'path'

// Webpack Configuration
import webpackConfig from '../../webpack.config'
import { ConfigArgs } from '../../webpack/webpack.types'

const devServer: () => void = async () => {
  const clientOptions: ConfigArgs = {
    mode: 'development',
    presets: ['client']
  }

  const serverOptions: ConfigArgs = {
    mode: 'development',
    presets: ['server']
  }

  const serverWebpackConfig = await webpackConfig(serverOptions)
  const clientWebpackConfig = webpack(await webpackConfig(clientOptions))
  let watchServer: any

  if (!watchServer) {
    watchServer = webpack(serverWebpackConfig, (err, stats) => {
      if (stats) {
        console.log(
          stats.toString({
            chunks: false,
            colors: true
          })
        )
      }
    })
  }

  const devServerConfig: WebpackDevServer.Configuration = {
    hot: true,
    port: 3001,
    disableHostCheck: true,
    contentBase: path.resolve('src', 'static'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    overlay: {
      errors: true,
      warnings: false
    },
    watchOptions: {
      ignored: /node_modules/
    }
  }

  const server = new WebpackDevServer(clientWebpackConfig, devServerConfig)

  server.listen(3001)
}

devServer()
