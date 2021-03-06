const path = require("path");

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")]
    }
  },
  devServer: {
    // https: true,
    // proxy: 'https://jobs.github.com/'
  }
}
