import iconUrl from "./3ingrless-icon.svg";

export function viewHeaderIcon() {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  // Create a wrapper div and insert the SVG
  const wrapper = document.createElement("div");
  wrapper.innerHTML = iconUrl;

  const svgElement = wrapper.querySelector("svg");
  if (svgElement) {
    // Make it scale with the row height
    svgElement.classList.add("h-full", "mr-4", "text-primary");
    // Make the fill inherit the text color
    svgElement.setAttribute("fill", "currentColor");

    // Insert as the first child
    headerContainer.insertBefore(svgElement, headerContainer.firstChild);
  }
}
