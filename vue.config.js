const report = process.argv.find(x => x == "--report");
module.exports = {
  configureWebpack: {
    plugins: [],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  }
};
if (report) {
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
  module.exports.configureWebpack.plugins.push(new BundleAnalyzerPlugin());
}
