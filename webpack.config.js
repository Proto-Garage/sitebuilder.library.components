const path = require("path");
const ROOT = path.resolve(__dirname, "src");

module.exports = {
  context: ROOT,
  entry: {
    main: "./components/index.tsx"
  },
  devtool: "cheap-module-source-map",
  devServer: {},
  module: {
    rules: [
      /****************
       * PRE-LOADERS
       *****************/
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader"
      },
      {
        enforce: "pre",
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["babel-loader", "tslint-loader"]
      },
      {
        test: /\.tsx$/,
        exclude: [/node_modules/],
        use: ["babel-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].bundle.js",
    libraryTarget: "umd",
    library: "sitebuilder.library.components",
    umdNamedDefine: true
  }
};
