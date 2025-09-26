const categoriesComponent = (function () {
  const targetPatterns = [
    "popcorn, peanuts, seeds",
    "vegetable & cooking oils",
    "wholesome snacks",
  ];
  const categoriesSanitized = new Set();
  const categories = new Set();
  const DbProducts = new Set();

  function sanitize(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\d-]+/g, "-") // replace anything not a-z, 0-9, or dash with -
      .replace(/--+/g, "-") // collapse multiple hyphens
      .replace(/^-+|-+$/g, ""); // remove leading/trailing hyphens
  }

  return {
    extractCategories: function (data) {
      // first store all product records from the database
      DbProducts.add(data);
      // then extract categories for both the URL and original string into two separate sets
      targetPatterns.forEach((pattern) => {
        const lowerPattern = pattern.toLowerCase();
        data.forEach((item) => {
          const cat = (item.branded_food_category || "").toLowerCase();
          if (cat.startsWith(lowerPattern)) {
            categoriesSanitized.add(sanitize(item.branded_food_category));
            categories.add(item.branded_food_category);
            //DbProducts.add(item);
          }
        });
      });
    },
    getCategoriesSanitized: function () {
      return Array.from(categoriesSanitized);
    },
    getCategories: function () {
      return Array.from(categories);
    },
    getDbProducts: function () {
      return DbProducts;
    },
    getProductByCategory: function (cat) {
      const products = Array.from(DbProducts);
      const categoryProducts = [];
      for (const product of products[0]) {
        if (product.branded_food_category === cat) {
          categoryProducts.push(product);
          if (categoryProducts.length >= 100) break;
        }
      }
      return categoryProducts;
    },
  };
})();

module.exports = categoriesComponent;
