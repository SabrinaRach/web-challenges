//console.clear();

const box = document.querySelector('[data-js="box"]');
const color = document.querySelector('[data-js="input-color"]');
const radius = document.querySelector('[data-js="input-radius"]');
const rotation = document.querySelector('[data-js="input-rotation"]');

color.addEventListener("input", () => {
  //const value = color.value;
  box.style.backgroundColor = `hsl(${color.value}, 100%, 50%)`;
});

radius.addEventListener("input", () => {
  box.style.borderRadius = `${radius.value}%`;
});

rotation.addEventListener("input", () => {
  box.style.transform = `rotate(${rotation.value}deg)`;
});
