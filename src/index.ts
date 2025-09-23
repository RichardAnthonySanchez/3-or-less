import products from "../public/data/json_foods_under_3_ingr.json";
import { controllerSearchSubmit } from "./components/search/controllerSearch";
import { viewSearch } from "./components/search/viewSearch";

function component() {
  const element = document.createElement("div");
  element.id = "container";

  element.appendChild(viewSearch());
  const searchResults = document.createElement("div");
  searchResults.id = "search-results";
  element.appendChild(searchResults);

  controllerSearchSubmit(products);

  return element;
}

document.body.appendChild(component());
