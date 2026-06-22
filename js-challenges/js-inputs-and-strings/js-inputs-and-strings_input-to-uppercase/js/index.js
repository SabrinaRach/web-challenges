//console.clear();

const textInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const inputValue = textInput.value;
  const inputValueUppercase = inputValue.toUpperCase();
  textInput.value = inputValueUppercase;
});

// oder

const textInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  textInput.value = textInput.value.toUpperCase();
});
