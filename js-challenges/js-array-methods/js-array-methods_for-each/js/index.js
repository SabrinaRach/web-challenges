const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// TASK 1
colors.forEach((color) => {
  // For each hex code a new `div` with the class `color-box` should be created.
  const box = document.createElement("div");
  box.classList.add("color-box");
  //The `background-color` of the `div` should be the current hex code.
  box.style.backgroundColor = color;
  //The element should be added to the page.
  document.body.appendChild(box);
});

// TASK 2
//Create a new function called `renderColorBox`.
  // Copy your code from the arrow function into this new function.
function renderColorBox(color) {
  const box = document.createElement("div");
  box.classList.add("color-box");
  box.style.backgroundColor = color;
  document.body.appendChild(box);
}

//Use the forEach method with renderColorBox to create the color boxes a second time!
colors.forEach((color) => {
  renderColorBox(color);
});