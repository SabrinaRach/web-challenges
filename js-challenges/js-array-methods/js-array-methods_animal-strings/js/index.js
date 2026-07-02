console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists =
  animalStrings.find((animal) => animal === "hippo") !== undefined;
console.log("hippoExists", hippoExists); //returns true

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists =
  animalStrings.find((animal, index) => index >= 5 && animal === "cat") !==
  undefined;
console.log("catStartingFromIndexFiveExists", catStartingFromIndexFiveExists); //returns false

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.startsWith("p"),
);
console.log("firstAnimalStartingWithLetterP", firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex(
  (animal) => animal === "giraffe",
);
console.log("indexOfGiraffe", indexOfGiraffe); // returns 7

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// That's why we use toSorted()
const animalsSortedAlphabetically = animalStrings.toSorted((a, b) => {
  //Die Vergleichsfunktion bekommt immer zwei Elemente (a und b).
  if (a < b) {
    // es wird geprüft, ob a alphabetisch vor b kommt
    return -1; //bedeutet: a kommt vor b
  }
  if (a > b) {
    // es wird geprüft, ob a alphabetisch hinter b kommt
    return 1; //bedeutet: b kommt vor a
  }
  return 0; //bedeutet: a und b sind gleich, also keine Änderung in der Reihenfolge
});
console.log("animalsSortedAlphabetically", animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.filter((animal) =>
  animal.endsWith("z"),
);
console.log("anyAnimalEndsWithLetterZ", anyAnimalEndsWithLetterZ); //returns []

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2,
);
console.log(
  "everyAnimalHasMoreThanTwoLetters",
  everyAnimalHasMoreThanTwoLetters,
); //returns true

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)
const sumOfAllAnimalCharacters = animalStrings
  .map((animal) => animal.length) //map() geht jedes Element des Arrays einzeln durch und erstellt ein neues Array. - animal.legnth gibt die Länge des Strings zurück (bei cat also 3). Das neue Array enthält also die Längen der Strings.
  .reduce((sum, length) => sum + length, 0); //reduce() geht das neue Array durch und summiert die Längen auf. sum ist der aktuelle Wert, length ist der aktuelle Wert des Arrays. 0 ist der Startwert für sum.
console.log("sumOfAllAnimalCharacters", sumOfAllAnimalCharacters); //returns 102

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
