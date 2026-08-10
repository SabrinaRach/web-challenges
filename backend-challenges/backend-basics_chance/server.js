import { createServer } from "node:http";
import Chance from "chance";

/* Chance is a minimalist generator of random strings, numbers, etc. to help reduce some monotony particularly while writing automated tests or anywhere else you need anything random.
 */

// Instantiate Chance so it can be used
const chance = new Chance();

const randonName = chance.name();
//random age with min and max numbers
const randomAge = chance.integer({ min: 20, max: 110 });
const randomProfession = chance.profession();

export const server = createServer((request, response) => {
  response.end(
    `Hello, my name is ${randonName} and I am ${randomAge} years old. I am a ${randomProfession}.`,
  );
});
