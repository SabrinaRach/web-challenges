console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  // log the entire data object
  console.log(data);
  // log different values of the data object --> hier: Name of the characters
  const characterNames = data.results.map((character) => character.name);
  console.log(characterNames);
  // log different values of the data object --> hier: Name of the first character
  console.log(data.results[0].name);
  // Bonus: Can you log the eye color of R2-D2?
  console.log(
    data.results.find((character) => character.name === "R2-D2").eye_color,
  );
}
fetchData();
