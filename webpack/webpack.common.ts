// Dependencies
import { Configuration } from 'webpack'
import { resolve } from 'path'
import createStyledComponentsTransformer from 'typescript-plugin-styled-components'

const styledComponentsTransformer = createStyledComponentsTransformer()

const webpackCommonConfig: () => Configuration = () => {
  const webpackConfig: Configuration = {
    output: {
      path: resolve('dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: [styledComponentsTransformer]
                })
              }
            }
          ]
        }
      ]
    }
  }

  return webpackConfig
}

export default webpackCommonConfig
