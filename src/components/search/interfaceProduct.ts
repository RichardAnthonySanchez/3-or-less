export interface Product {
  gtin_upc: number;
  brand_owner: string;
  brand_name?: string;
  subbrand_name?: string;
  product_name: string;
  branded_food_category: string;
  ingredients: string;
  household_serving_fulltext?: string;
  serving_size?: number;
  serving_size_unit?: string;
  fat_per_100g?: string;
  energy_kcal_per_100g?: string;
  saturated_fat_per_100g?: string;
}
