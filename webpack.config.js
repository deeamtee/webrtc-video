const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ['@babel/polyfill', path.resolve(__dirname, "src/index.tsx")],
  output: {
    path: path.resolve(__dirname, "server/public"),
    filename: "index.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'server/public'),
    proxy: {
      '/ws': 'http://localhost:3010',
      '/api': 'http://localhost:3010',
    },
    historyApiFallback: {
      index: '/public'
    },
    hot: true,
    port: 3000,
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};