import "./styles.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement("div");

  element.innerHTML = "hello world!";

  return element;
}

document.body.appendChild(component());
