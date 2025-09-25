export function viewSearch(): HTMLFormElement {
  const form = document.createElement("form");
  form.className =
    "flex flex-col sm:flex-row items-center w-full h-full mx-auto gap-2 p-4";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.name = "searchQuery";
  searchInput.id = "search-input";
  searchInput.placeholder = "Search products...";
  searchInput.autocomplete = "off";
  searchInput.className =
    "input input-bordered w-full sm:flex-1 text-base text-3xl focus:outline-none focus:ring-2 focus:ring-primary border h-24 px-2 py-1 rounded";
  form.appendChild(searchInput);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "submit-search";
  submitButton.textContent = "Search";
  submitButton.className =
    "btn bg-primary text-white w-full sm:w-32 h-24 rounded";

  form.appendChild(submitButton);

  return form;
}
