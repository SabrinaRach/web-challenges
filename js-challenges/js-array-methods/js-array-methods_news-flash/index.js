import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
/* filter all cards which have the category "politics" in their category array
- to do so, use the `includes` method on `card.categories` */
const filteredNews = news.filter((card) =>
  card.categories.includes("politics"),
);

// Part 2 - start here
/*  Use the toSorted() method to sort all filtered cards by the length of their body text. */
const sortedNews = filteredNews.toSorted(
  (a, b) => a.body.length - b.body.length,
);
// (a, b) => a.body.length - b.body.length ist eine Vergleichsfunktion, die von toSorted() verwendet wird, um zu entscheiden, in welcher Reihenfolge zwei Elemente stehen sollen.
// Beispiel: Ist die a.body.length (body ist ein String, mit length die Anzahl der Zeichen) 5 und b.body.length 10, dann ist a - b = -5, also negativ. D.h., es bleibt a vor b. Das bedeutet: kürzerer Text zuerst.

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here. Have a look at the console to see if you're right or wrong.
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
