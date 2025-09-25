import { modelSearch } from "./modelSearch";
import { Product } from "./interfaceProduct";
import { viewSearchResults } from "./viewSearchResults";

export function controllerSearchSubmit(products: Product[]) {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const query = (document.querySelector("#search-input") as HTMLInputElement)
      .value;

    let productContainer = document.querySelector(".product-container");

    if (target.id === "submit-search") {
      e.preventDefault();

      if (productContainer) {
        productContainer.remove();
      }

      const response = modelSearch(query, products);
      viewSearchResults(response);
    }
  });
}
