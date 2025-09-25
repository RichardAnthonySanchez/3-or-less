import products from "../public/data/json_foods_under_3_ingr.json";
import { viewHeaderIcon } from "./components/header/viewHeaderIcon";
import { controllerSearchSubmit } from "./components/search/controllerSearch";
import { viewSearch } from "./components/search/viewSearch";
import "./styles.css";

function component() {
  const element = document.createElement("div");
  element.id = "container";
  element.className = "flex flex-col mx-auto max-w-3xl min-h-screen p-4";

  viewHeaderIcon();

  element.appendChild(viewSearch());

  const searchResults = document.createElement("div");
  searchResults.id = "search-results";
  element.appendChild(searchResults);

  controllerSearchSubmit(products);

  return element;
}

document.body.appendChild(component());
