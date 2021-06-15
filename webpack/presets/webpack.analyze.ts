// Dependencies
import { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const webpackAnalyzeConfig: () => Configuration = () => ({
  plugins: [new BundleAnalyzerPlugin()]
})

export default webpackAnalyzeConfig
