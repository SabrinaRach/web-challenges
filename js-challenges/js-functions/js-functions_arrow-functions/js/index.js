console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/
//Aufgabe 1
//ist gegeben
function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
// arrow function: const functionName = (parameter1, parameter 2, ...) => {function body}
// implicit return funktioniert nur bei einem Ausdruck, hier sind aber mehrere Bedingungen (if/else), deshalb Werte und Logik aus vorheriger function einfach kopieren

const getCurrentHour = () => {
  // 1. Werte holen
  const now = new Date();
  const currentHour = now.getHours();
  // 2. Logik
  if (currentHour === 0) {
    // 3. return
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

//Aufgabe 2
//ist gegeben
function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

//arrow function with implicit return
const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

//Aufgabe 3
//ist gegeben
function cleanInput(string) {
  return string.toLowerCase().trim();
}

//arrow function with implicit return
const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

//Aufgabe 4
// ist gegeben
const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

//classic function
function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

//Aufgabe 5
//ist gegeben
const add3 = (a, b, c) => a + b + c;

//classic function
function add3(a, b, c) {
  return a + b + c;
}

//Aufgabe 6
//ist gegeben
const repeat10 = (string) => string.repeat(10);

//classic function
function repeat10(string) {
  return string.repeat(10);
}
