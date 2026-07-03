import { getRandomColor } from "../../utils/randomColor.js";

export function Pentagon () {
  const pentagonElement = document.createElement("div");
  pentagonElement.classList.add("pentagon");
  pentagonElement.addEventListener("click", () => {
    pentagonElement.style.backgroundColor = getRandomColor();
  });
  return pentagonElement;
};