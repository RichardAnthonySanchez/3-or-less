import products from "../public/data/json_foods_under_3_ingr.json";
import { viewHeaderIcon } from "./components/header/viewHeaderIcon";
import { controllerSearchSubmit } from "./components/search/controllerSearch";
import { viewSearch } from "./components/search/viewSearch";
import "./styles.css";

function componentProduct() {
  const header = document.getElementById("header-container");

  viewHeaderIcon();
  header.appendChild(viewSearch());

  const element = document.createElement("div");
  element.className = "flex flex-col mx-auto max-w-3xl min-h-screen p-4 mt-12";

  const searchResults = document.createElement("div");
  searchResults.id = "search-results";
  element.appendChild(searchResults);
  controllerSearchSubmit(products);

  return element;
}

document.body.appendChild(componentProduct());
