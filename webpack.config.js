const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: 'pdfAnnotate.js',
    libraryTarget: 'umd',
    library: 'pdfAnnotate',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
