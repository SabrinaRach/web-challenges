/*  -----------------------------------------------------------
            Challenge 1: Card Background Fade
---------------------------------------------------------------- */

const changeColorButton = document.querySelector("[data-js=changeColorButton]");
const colorChangeCard = document.querySelector("[data-js=colorChangeCard]");
const colors = ["#e0f7fa", "#ffe0b2", "#c8e6c9", "#ffccbc", "#d1c4e9"]; // Light pastel colors
let currentColorIndex = 0;

changeColorButton.addEventListener("click", () => {
  // Add your solution below
  // beim Klick --> Index erhöhen --> Farbe aus colors wählen --> backgroundColor der Karte auf diese Farbe ändern
  currentColorIndex++; //geht zur nächsten Farbe
  if (currentColorIndex >= colors.length) {
    // springt zurück zum Anfang (Loop)
    currentColorIndex = 0;
  }
  colorChangeCard.style.backgroundColor = colors[currentColorIndex]; // holt die aktuelle Farbe aus dem Array
});

/* ODER

changeColorButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex +1) % colors.length;
  colorChangeCard.style.backgroundColor = colors[currentColorIndex];
});
*/

/*  -----------------------------------------------------------
            Challenge 2: Button Hover Size Change
---------------------------------------------------------------- */

// No JavaScript needed as CSS :hover pseudo-class handles the animation.
// We included a basic click active state for completeness.

/*  -----------------------------------------------------------
            Challenge 3: Loading Spinner Toggle
---------------------------------------------------------------- */
const toggleLoaderButton = document.querySelector(
  "[data-js=toggleLoaderButton]",
);
const loaderContainer = document.querySelector("[data-js=loaderContainer]");
let loaderActive = false;

toggleLoaderButton.addEventListener("click", () => {
  // Add your solution below
  loaderActive != loaderActive;
  loaderContainer.classList.toggle(
    "active",
  ); /*classList = Steuerzentrale für CSS-Klassen in JS, steuert hier das active auf dem .loader-container an */
});

/*  -----------------------------------------------------------
            Challenge 4: Slide-in Div
---------------------------------------------------------------- */
const slideInButton = document.querySelector("[data-js=slideInButton]");
const slideInBox = document.querySelector("[data-js=slideInBox]");

slideInButton.addEventListener("click", () => {
  // Add your solution below
  slideInBox.style.transform = "translateX(100%)"; // Initialzustand: Setzt die Position auf 100%, damit es von rechts sichtbar wird
  slideInBox.classList.toggle("active");
  if (slideInBox.classList.contains("active")) {
    slideInBox.style.transform = "translateX(0)"; // Setzt die Position auf 0, damit es sichtbar wird
  }
});
