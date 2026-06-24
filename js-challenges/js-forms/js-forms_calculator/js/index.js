console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Aufgabe: Wenn Operator "___" ist, dann rufe ___(a, b) auf und speichere das Ergebnis in result
// Beispiel: Wenn Operator "addition" ist, dann rufe add(a,b) auf ...

// EventListener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1. Werte holen von numberA und numberB
  const numberA = document.querySelector('[name="numberA"]');
  const numberB = document.querySelector('[name="numberB"]');

  // 2. in Zahlen umwandeln

  const numberAvalue = Number(numberA.value);
  const numberBvalue = Number(numberB.value);

  // 3. Operator auswählen
  // es ist immer nur ein Operator ausgewählt (mit :checked), es müssen nicht alle Operatoren einzeln geholt werden
  // Radio Buttons sind HTML-Elemente, mit denen man genau eine Option aus mehreren auswählen kann (alle name = operator)

  const operator = document.querySelector('[name="operator"]:checked');

  let result;

  // 4. richtige Funktion aufrufen
  if (operator.value === "addition") {
    //operator.value sagt aus, was ausgewählt wurde, also hier "addition". operator.checked sagt nur aus, dass etwas ausgewählt wurde (true, false), nicht den Inhalt
    result = add(numberAvalue, numberBvalue);
  } else if (operator.value === "subtraction") {
    result = subtract(numberAvalue, numberBvalue);
  } else if (operator.value === "multiplication") {
    result = multiply(numberAvalue, numberBvalue);
  } else if (operator.value === "division") {
    result = divide(numberAvalue, numberBvalue);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
