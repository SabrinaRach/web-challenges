//console.clear();
//Input Felder
const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

//zwei EventListener weil es 2 Inputs (=Pizzen) gibt, an denen sich allerdings jeweils etwas ändern kann
pizzaInput1.addEventListener("input", () => {
  // Write your code here
  //Werte auslesen
  const pizzaSize1 = Number(pizzaInput1.value); //number macht aus string eine Zahl, hier nicht zwingend nötig, denn die Operatoren (/, **, *) konvertieren in JS automatisch in numbers
  const pizzaSize2 = Number(pizzaInput2.value);
  //Anzeige im Browser
  output.textContent = Math.round(
    //Math.round rundet auf die nächste ganze Zahl
    calculatePizzaGain(pizzaSize1, pizzaSize2), //calculatePizzaGain wurde in der Funktion berechnet
  );
  updatePizzaDisplay(pizza1, pizzaSize1); //aus Task 2

  updateOutputColor(pizzaSize1, pizzaSize2); // aus Bonus Task
});

pizzaInput2.addEventListener("input", () => {
  // Write your code here
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);

  output.textContent = Math.round(calculatePizzaGain(pizzaSize1, pizzaSize2));

  updatePizzaDisplay(pizza2, pizzaSize2); //aus Task 2

  updateOutputColor(pizzaSize1, pizzaSize2); // aus Bonus Task
});

// Task 1: Define the function `calculatePizzaGain` here // circle area = Pi * r²
function calculatePizzaGain(diameter1, diameter2) {
  //erst Radius ausrechnen
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;
  //dann area for both pizzas (circle area = Pi * r²)
  const area1 = Math.PI * radius1 * radius1;
  const area2 = Math.PI * radius2 * radius2;
  // Calculate the pizza gain in percent relative to the first pizza. The formula is: `(area2 - area1) / area1 * 100`.
  // einfacher: const pizzaArea1 = (diameter1 / 2) ** 2 * Math.PI;
  //            const pizzaArea2 = (diameter2 / 2) ** 2 * Math.PI;
  return ((area2 - area1) / area1) * 100;
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(pizzaElement, newSize) {
  const displaySize = (newSize / 24) * 100; // 24 ist die vorgegebene Standardgröße der Pizza, d.h. alles wird daran relativ skaliert
  pizzaElement.style.width = displaySize + "px"; //.style.width greift auf die width im CSS zu
  // oder pizzaElement.style.width = `${displaySize}px`;
}

// Task 3: Define the function `updateOutputColor` here

function updateOutputColor(pizzaSize1, pizzaSize2) {
  if (pizzaSize1 > pizzaSize2) {
    outputSection.style.backgroundColor = "var(--red)"; //CSS Variable als string schreiben
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
