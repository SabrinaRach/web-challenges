console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  // ab hier
  const errorElement = document.querySelector(".error");
  try {
    const result = operations[operation](firstNumber, secondNumber); //alle operation Optionen (add, substract, multiply, divide)
    errorElement.textContent = ""; // löscht Fehlermeldung, macht Feld leer
  } catch (error) {
    errorElement.textContent = "You cannot divide by 0, choose another number.";
  }
  output.innerText = operations[operation](firstNumber, secondNumber);
});
