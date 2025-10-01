const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const categoriesComponent = require("./src/components/category/categoryExtractor");

function getData() {
  const raw = fs.readFileSync(
    path.resolve(__dirname, "public/data/json_foods_under_3_ingr.json"),
    "utf-8"
  );
  console.log("Raw length:", raw.length);

  const data = JSON.parse(raw);
  return data;
}

const data = getData();
console.log(data.length);

categoriesComponent.extractCategories(data);

const categoriesSanitized = categoriesComponent.getCategoriesSanitized();
const categories = categoriesComponent.getCategories();

// zip the two arrays together
const categoryPairs = categories.map((category, i) => ({
  category, // unsanitized
  categorySanitized: categoriesSanitized[i], // sanitized
}));

module.exports = {
  entry: {
    index: "./src/index.ts",
    category: "./src/category.ts",
    product: "./src/product.ts",
  },
  plugins: [
    /*
    ...categoryPairs.map(({ category, categorySanitized }) => {
      const productsList = categoriesComponent.getProductByCategory(category);

      return new HtmlWebpackPlugin({
        filename: `${categorySanitized}.html`, // sanitized for filename
        templateParameters: {
          category, // unsanitized for display / lookups
          products: productsList,
        },
        template: "./src/assets/category-template.html",
        chunks: ["category"],
      });
    }),
    */
    ...data.map((product) => {
      return new HtmlWebpackPlugin({
        filename: `${product.gtin_upc}.html`,
        template: "./src/assets/product-template.html",
        chunks: ["product"],
        templateParameters: {
          title: `${product.brand_name} ${product.brand_owner} ${product.subbrand_name}`,
          category: product.branded_food_category,
          ingredients: product.ingredients,
          serving: product.household_serving_fulltext,
        },
      });
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/assets/template.html",
      chunks: ["index"],
      templateParameters: {
        title: "3 Ingredients or Less",
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      /*
      { // this object will break any imported variables in templates that aren't excluded
        test: /\.html$/i, 
        loader: "html-loader",
        exclude: path.resolve(__dirname, "src", "template.html"),
      },
      */
      {
        test: /\.svg$/i,
        type: "asset/source",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
