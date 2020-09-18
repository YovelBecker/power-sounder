const path = require('path');

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/styles/main.scss')]
    }
  },
  css:{
    requireModuleExtension: true
  },
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Power Sounder',
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
}