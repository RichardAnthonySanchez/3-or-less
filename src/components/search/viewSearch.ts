export function viewSearch(): HTMLFormElement {
  const form = document.createElement("form");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.name = "searchQuery";
  searchInput.id = "search-input";
  form.appendChild(searchInput);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "submit-search";
  submitButton.value = "Submit";

  form.appendChild(submitButton);

  return form;
}
