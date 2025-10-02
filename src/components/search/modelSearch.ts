import { Product } from "./interfaceProduct";

export function modelSearch(query: string, products: Product[]) {
  const lowerQuery = query.toLowerCase();

  const regex = new RegExp(`\\b${lowerQuery}\\b`, "i");

  return products.filter((product) => {
    const searchableValues = [
      product.product_name,
      //product.subbrand_name,
      //product.brand_name,
      //product.brand_owner,
      //product.branded_food_category,
      product.ingredients,
      //product.gtin_upc.toString(),
    ];

    return searchableValues.some((val) => regex.test(val));
  });
}
