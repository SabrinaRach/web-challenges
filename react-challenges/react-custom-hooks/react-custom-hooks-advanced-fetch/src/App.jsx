import React, { useState } from "react";
import "./styles.css";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [id, setId] = useState(0);
  /* Destructure the `data` and `isLoading` entries. Rename the `data` entry to `joke`: 
  Formel const { alterName : neuerName } = objekt;*/
  const {data: joke, isLoading} = useFetch(`https://example-apis.vercel.app/api/bad-jokes/${id}`);

  if (!joke) {
    return null;
  }

  return (
    <>
    {/* - Use the new `isLoading` value to display a `⏳` icon instead of the joke text when `isLoading` equals `true`. */}
      <h1>{isLoading === true ? "⏳" : joke.joke}</h1> {/* vorher <h1>{joke.joke}</h1> */}
      <div className="button-group">
        <button type="button" onClick={() => setId(joke.prevId)}>
          Previous Joke
        </button>
        <button type="button" onClick={() => setId(joke.nextId)}>
          Next Joke
        </button>
      </div>
    </>
  );
}
