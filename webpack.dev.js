const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = async () => {
  // Wait for categories + base config
  const baseConfig = await common();

  return merge(baseConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"],
      static: {
        directory: path.join(__dirname, "public"),
      },
    },
  });
};
