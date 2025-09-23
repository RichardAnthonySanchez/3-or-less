import { Product } from "./interfaceProduct";

//todo
// search model is returning products that have short character strings that match our query despite them not being the words/products we're looking for

export function viewSearchResults(response: Product[]) {
  const searchResultsContainer = document.querySelector("#search-results");
  searchResultsContainer.innerHTML = "";

  if (response.length === 0) {
    searchResultsContainer.innerHTML =
      "<p>No products found. Try another search.</p>";
    return;
  }

  const ul = document.createElement("ul");

  response.forEach((product) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = `/${product.gtin_upc}.html`;
    a.style.display = "block";

    const {
      gtin_upc,
      serving_size,
      serving_size_unit,
      household_serving_fulltext,
      ...rest
    } = product;

    const details = Object.entries(rest)
      .map(([key, value]) => `${key}: ${value}`)
      .join(" | ");

    a.textContent = details;
    li.appendChild(a);

    ul.appendChild(li);
  });

  searchResultsContainer.appendChild(ul);
}
