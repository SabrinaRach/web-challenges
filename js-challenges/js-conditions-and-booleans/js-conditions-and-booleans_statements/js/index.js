// console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
let receivedPassword = "abc123";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

//const receivedPassword = "password1234";

// Part 2: Even / Odd
const number = 6;
// eine Number ist gerade, wenn sie durch zwei teilbar ist, d.h. der Rest der Division (modulo) muss 0 sein
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else if (numberOfHotdogs >= 1000000) {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Theodore";

const greeting = "Hello " + (userName === "Coach" ? "Coach" : userName) + "!";

console.log(greeting);
