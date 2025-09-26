const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: {
    index: "./src/index.ts",
    category: "./src/category.ts",
    product: "./src/product.ts",
  },
  mode: "production",
  devtool: "inline-source-map",
});
