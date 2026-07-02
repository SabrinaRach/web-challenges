import { countries } from "./utils/countries.js"; //ein Array mit allen Ländern
import { Country } from "./components/Country/Country.js"; // eine Funktion, die aus einem Ländernobjekt ein HTML-Element erstellt

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  // Clear the container before adding new country elements --> Beispiel: Wenn man zuert G gesucht hat, werden vielleicht Germany, Greece usw angezeigt. Wenn man dann nach Fr sucht, würden ohne das Löschen der vorherigen Ergebnisse Germany, Greece usw. immer noch angezeigt werden. Deshalb muss der Container geleert werden, bevor die neuen Ergebnisse angezeigt werden.
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase(); //lowercase macht die Eigabe des Nutzers klein

  //Inside the event listener, use the `find` method to find the country in the countries array which name starts with the search string.
  //Change the method from `find` to `filter`, to filter the countries to those which name starts with the search string.
  //const foundCountry = countries.find((country) =>
  // country.name.startsWith(searchString),
  // );
  //find() stoppt nach dem ersten Treffer, filter() gibt ein Array zurück, das alle Länder enthält, die mit dem Suchstring übereinstimmen

  const foundCountries = countries.filter((country) => {
    //filter gibt ein Array zurück, das alle Länder enthält, die mit dem Suchstring übereinstimmen
    const countryName = country.name.toLowerCase(); //countryName wird auch klein gemacht, damit es mit searchString verglichen werden kann
    return countryName.startsWith(searchString); //vergleicht, ob der Name des Landes mit dem Suchstring beginnt. Wenn ja, wird das Land in das Array foundCountries aufgenommen --> Beispiel: Wenn der Suchstring "g" ist, werden Germany, Greece usw. in das Array aufgenommen.
  });

  console.log(foundCountries); //Test, um zu sehen, ob die richtigen Länder gefunden werden

  //wenn nichts eingegeben wurde "", wird der Container geleert, damit keine Länder angezeigt werden, wenn der Suchstring leer ist
  if (event.target.value === "") {
    container.innerHTML = "";
  }

  if (foundCountries) {
    foundCountries.forEach((country) => {
      //forEach() läuft durch jedes gefundene Land
      const countryElement = Country(country); //Die Funktion bekommt das Länderobjekt und erstellt ein HTML-Element, das das Land darstellt
      container.append(countryElement); //HTML Elemente werden in den Container eingefügt, damit sie auf der Seite angezeigt werden
    });
  }
});
