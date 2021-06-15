// Dependencies
import { Configuration, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } from 'webpack'
import Dotenv from 'dotenv-webpack'

const webpackDevConfig: () => Configuration = () => ({
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js'
  },
  plugins: [new Dotenv(), new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()]
})

export default webpackDevConfig
