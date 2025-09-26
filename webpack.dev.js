const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [
      "./src/assets/category-template.html",
      "./src/assets/template.html",
      "./src/assets/product-template.html",
    ],
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
});
