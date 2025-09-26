const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/3-or-less/",
    clean: true,
  },
  mode: "production",
  devtool: "inline-source-map",
});
