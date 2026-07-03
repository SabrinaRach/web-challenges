//Warum steht nur noch import {App} am Ende in index.js?
// Weil index.js nur noch der Einstiegspunkt (entry file) ist. Index.js macht nur noch: App starten + rendern
//   Vorteil: Man kann neue Komponenten hinzufügen, ohne index.js anzufassen
// es wird eine Komponenten-Hierarchie gebaut:
//  index.js
//   ↓
//  App.js
//   ↓
//  Header + Form + CardList
//   ↓
//  Card
//   ↓
//  Bookmark

import { App } from "./components/App/App.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();

//cardsData.js   → Daten
//Card.js        → zeigt eine Card
//CardList.js    → rendert alle Cards
//Form.js        → fügt neue hinzu
//Bookmark.js    → togglet Status


/* Was App.js jetzt macht:
export function App() {
  const app = document.createElement("main");

  app.append(
    Header(),
    Form(),
    CardList()
  );

  return app;
} 
*/
