import Chance from "chance";

const chance = new Chance();
const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  twitter: chance.twitter(),
  geohash: chance.geohash(),
  /* Geohash is a public domain geocode system invented in 2008 by Gustavo Niemeyer which encodes a geographic location into a short string of letters and digits. */
};

export default function handler(request, response) {
response.status(200).json(character);
}