import { getRandomColor } from "../../utils/randomColor.js";

// - Wrap the creation of the circle element, including its `addEventListener`, in a separate function with a capitalized name, e.g., `Circle`.
export default function Circle() {
const circleElement = document.createElement("div");
circleElement.classList.add("circle");
circleElement.addEventListener("click", () => {
  circleElement.style.backgroundColor = getRandomColor(); //Use this function inside each of the three event listeners and apply the returned color to `backgroundColor`.
});
return circleElement; 
}