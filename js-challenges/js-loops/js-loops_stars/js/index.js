console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

// Add a parameter `filledStars` to the `renderStars` function, expecting it to be a number.
function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  // Use a `for` loop inside the function to create 5 stars.
  for (let star = 1; star <= 5; star++) {
    // create an `img` element, setting its `src` attribute to the path of the empty star image (`assets/star-empty.svg`).
    console.log(star);
    const imgElement = document.createElement("img");

    //Inside the loop, use the value of `filledStars` to decide if each star should be filled or empty.
    // 💡 _Use the loop's counter variable to check which star is currently being created (first, second, third, etc.)._
    if (star <= filledStars) {
      // Set the `src` attribute of each `img` element to the appropriate image path, either filled or empty.
      imgElement.src = "assets/star-filled.svg";
    } else {
      imgElement.src = "assets/star-empty.svg";
    }
    // Append the `img` element to the `starContainer`.
    starContainer.appendChild(imgElement);
  }

  // --^-- write or modify code above this line --^--
}

//Update the code that calls `renderStars` to pass a number between 0 and 5 as an argument to check if it displays correctly.
renderStars(3);
