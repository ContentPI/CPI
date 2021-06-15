// Dependencies
import { Configuration } from 'webpack'
import Dotenv from 'dotenv-webpack'

const webpackProdConfig: (arg0: { presets: string[] }) => Configuration = () => {
  const plugins = [new Dotenv()]

  return {
    mode: 'production',
    plugins
  }
}

export default webpackProdConfig
