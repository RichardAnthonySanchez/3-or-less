import { Product } from "./interfaceProduct";

export function viewSearchResults(response: Product[]) {
  const searchResultsContainer = document.querySelector("#search-results");
  searchResultsContainer.innerHTML = "";

  if (response.length === 0) {
    searchResultsContainer.innerHTML =
      "<p>No products found. Try another search.</p>";
    return;
  }

  const ul = document.createElement("ul");
  ul.className = "space-y-4"; // spacing between list items

  response.forEach((product) => {
    const li = document.createElement("li");
    li.className = "card-body p-2";

    const a = document.createElement("a");

    const basePath =
      process.env.NODE_ENV === "production" ? "/3-or-less/" : "./";

    a.href = `${basePath}${product.gtin_upc}.html`;

    a.className =
      "card w-full border-4 border-dashed border-primary text-gray-700 shadow-md hover:shadow-lg hover:bg-primary hover:border-gray-700 transition-shadow duration-200 p-6 rounded-lg";
    a.style.display = "block";

    // Destructure relevant fields
    const { product_name, brand_owner } = product;

    // Helper to title-case brand + subbrand
    const toTitleCase = (str: string) =>
      str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    // Card body content
    const cardBody = document.createElement("div");
    cardBody.className = "flex flex-row items-center p-6 space-x-4";

    //emojis
    const categoryEmojis: Record<string, string> = {
      "Pre-Packaged Fruit & Vegetables": "🥗",
      "Popcorn, Peanuts, Seeds & Related Snacks": "🍿",
      "Wholesome Snacks": "🥨",
      "Frozen Vegetables": "🥦",
      "Pasta by Shape & Type": "🍝",
      Milk: "🥛",
      "Fruit & Vegetable Juice, Nectars & Fruit Drinks": "🥤",
      "Vegetable & Cooking Oils": "🫒",
      Cheese: "🧀",
      Water: "💧",
      "Granulated, Brown & Powdered Sugar": "🍚",
      "Frozen Fish & Seafood": "🐟",
      Rice: "🍙",
      "Nut & Seed Butters": "🥜",
      "Canned & Bottled Beans": "🫘",
      "Chips, Pretzels & Snacks": "🍟",
      Cereal: "🥣",
      Cream: "🍦",
      "Eggs & Egg Substitutes": "🥚",
      "Seasoning Mixes, Salts, Marinades & Tenderizers": "🧂",
      Chocolate: "🍫",
      "Butter & Spread": "🧈",
      Honey: "🍯",
      Yogurt: "🍶",
      "Tea Bags": "🍵",
      "Powdered Drinks": "☕",
      Tomatoes: "🍅",
      "Pickles, Olives, Peppers & Relishes": "🥒",
      "Non Alcoholic Beverages  Ready to Drink": "🥤",
      "Energy, Protein & Muscle Recovery Drinks": "⚡",
      "Canned Fruit": "🍍",
      "Herbs & Spices": "🌿",
      Candy: "🍬",
      "Plant Based Water": "🥥",
      "Plant Based Milk": "🌱🥛",
      "Poultry, Chicken & Turkey": "🍗",
      "Canned Seafood": "🥫🐟",
      Baking: "🧁",
      "Crackers & Biscotti": "🍘",
      Coffee: "☕",
      "French Fries, Potatoes & Onion Rings": "🍟",
      "Cake, Cookie & Cupcake Mixes": "🎂",
      "Bacon, Sausages & Ribs": "🥓",
      "Cookies & Biscuits": "🍪",
      "Breakfast Foods": "🥞",
      "Prepared Pasta & Pizza Sauces": "🍕",
      "Ketchup, Mustard, BBQ & Cheese Sauce": "🍯",
      "Jam, Jelly & Fruit Spreads": "🍓",
      Soda: "🥤",
      "Ice Cream & Frozen Yogurt": "🍨",
      "Bread & Muffin Mixes": "🍞",
      "Taco Shells": "🌮",
      Alcohol: "🍷",
      "Baby/Infant  Foods/Beverages": "🍼",
      "Deli Salads": "🥗",
      "Other Snacks": "🥡",
      "Other Drinks": "🥤",
      "Other Meats": "🍖",
      "Other Condiments": "🧂",
      "Other Frozen Meats": "🥩",
      "Other Soups": "🥣",
      "Other Deli": "🥪",
    };

    const emoji = categoryEmojis[product.branded_food_category] || "🛒";
    const icon = document.createElement("span");
    icon.className = "text-4xl md:text-4xl lg:text-4xl";
    icon.textContent = emoji;
    cardBody.appendChild(icon);

    // Text container (title + footnote)
    const textContainer = document.createElement("div");
    textContainer.className = "flex flex-col";

    // Bold title: brand + subbrand
    const title = document.createElement("h2");
    title.className = "card-title font-bold text-4xl md:text-4xl lg:text-4xl";
    title.textContent = toTitleCase((product_name ?? "").trim());
    textContainer.appendChild(title);

    // Brand owner footnote, all caps
    if (brand_owner) {
      const owner = document.createElement("p");
      owner.className = "text-sm text-gray-500 mt-1";
      owner.textContent = brand_owner.toUpperCase();
      textContainer.appendChild(owner);
    }
    cardBody.appendChild(textContainer);

    a.appendChild(cardBody);
    li.appendChild(a);
    ul.appendChild(li);
  });

  searchResultsContainer.appendChild(ul);
}
