console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
// durch Object languages gehen
for (let key in languages) {
  // Create an `option` element for each entry in `languages`.
  const option = document.createElement("option");
  // jeden Object den Wert des Keys zuweisen
  option.value = key;
  // jedem Object den TextContent des Keys zuweisen, using bracket notation (e.g. `languages[myIteratorName]`)
  option.textContent = languages[key];
  // jede Option in Select einfügen
  select.append(option);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar
// - A `nav` object with keys ("home", "about", and "contact") is available.
//- Each key's value is an object with `href` and `text` properties.

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};
//- `nav` and `ul` elements have already been created and appended to the `main` element.
const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
// Your task is to fill this list with list items containing anchor tags. Use the `nav` object in a `for...in` loop.

//- Write a `for...in` loop for the `nav` object.
for (let key in nav) {
  // Create a list item and an anchor tag.
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  // Set the anchor's `href` and `textContent` properties using values from the `nav` object, accessed via bracket notation and the iterator variable.
  anchor.value = nav[key].href;
  anchor.textContent = nav[key].text;
  // Append the anchor to the list item, and the list item to the unordered list.
  listItem.append(anchor);
  ul.append(listItem);
}
// --^-- write or modify code above this line --^--
