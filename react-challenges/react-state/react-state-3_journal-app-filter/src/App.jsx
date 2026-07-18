import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
    isFavorite: false,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  /* - Create a new state called `filter`, which stores a string with `"all"` as initial value. */
  const [filter, setFilter] = useState("all");

  /*   - Besides the `entries` array which is stored in state, 
        create a new array called `favoriteEntries`, which **should not** be stored in state.
- The value of `favoriteEntries` should be all element from the `entries` array 
   where `isFavorite` is `true` (hint: you can use the array method `filter`). */
  const favoriteEntries = entries.filter((entry) => entry.isFavorite === true);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry,
      ),
    );
  }
  /* - Create a function called `handleShowFavoriteEntries` which sets the `filter` state to `"favorites"`. */
  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }
  /* - Create a function called `handleShowAllEntries` which sets the `showFavorites` state to `"all"`. */
  function handleShowAllEntries() {
    setFilter("all");
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        {/*       - Pass the two functions down to the `EntriesSection` component via the props `onShowAllEntries` and `onShowFavoriteEntries` you introduced earlier */}
        <EntriesSection
        /* Pass the value to this prop conditionally. Depending on the value of the state `filter` you pass the array `entries` or the array `favoriteEntries` */
          entries={filter === "favorites" ? favoriteEntries : entries}
          filter={filter}
          onToggleFavorite={handleToggleFavorite}
          onShowFavoriteEntries={handleShowFavoriteEntries}
          onShowAllEntries={handleShowAllEntries}
          /* Add the props `allEntriesCount` and `favoriteEntriesCount` props and pass a value for each.
            - The value can be read from the `length` property of the two arrays `entries` and `favoriteEntries`.  */
          allEntriesCount={entries.length}
          favoriteEntriesCount={favoriteEntries.length}

        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
