var path = require("path");
var ExtractTextPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = {
  entry: "./src/index.js",
  mode: "none",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react', 'es2015'],
          plugins: ['transform-class-properties']
      }      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?limit=10000"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractTextPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "styles.css"
    })
    // new BundleAnalyzerPlugin()
    // new CompressionPlugin({
    //         filename: '[path1]',
    //         algorithm: 'gzip',
    //         minRatio: 0.8
    // })
  ],
  resolve: {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
};
