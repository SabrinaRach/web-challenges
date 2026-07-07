/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) /*Punkt-Notation object.name, object.country => [name, country];

// export const getRelocatedCity = (
//  city1,
//  city2 = { name: "Berlin", country: "Germany" }
// ) => {
//  const [, country] = getNameAndCountry(city2); // nur das zweite Element aus Array nehmen
//  return {
//    ...city1, // Eigenschaften von city 1 übernehmen und country hinzufügen (Spread)
//    country,
//  };
// };

/* 1. Destructuring entfernen und durch normale Objekt-Zugriffe ersetzen*/
export const getNameAndCountry = (city) => {
  return [city.name, city.country];
};

/* 2. 
 Default Parameter ersetzen (city2 = ...)
 Spread Operator ersetzen (...city1)
 Array Destructuring ersetzen ([, country]) */
export const getRelocatedCity = (city1, city2) => {
  if (!city2) {
    city2 = {
      name: "Berlin",
      country: "Germany",
    };
  }
  return {
    name: city1.name,
    country: city2.country,
  };
};

console.log(getRelocatedCity);
