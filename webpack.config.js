const { join } = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: join(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  externals: [
    nodeExternals({
      modulesDir: join(__dirname, "node_modules"),
    }),
  ],
  output: {
    filename: "index.js",
    path: join(__dirname, "build"),
    library: "utils",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
};
