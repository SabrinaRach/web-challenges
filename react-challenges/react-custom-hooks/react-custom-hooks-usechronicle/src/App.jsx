/* Now its time to replace the useState hooks in the `App.jsx` component with our shiny new `useChronicle` hook. */

import React/* , { useState } */ from "react";
import { useChronicle } from "./hooks/useChronicle";
import "./styles.css";

export default function App() {
  /* - Make sure to also destructure the new third return value `resetState` (you can give it any name you like). It can look for example like this: 
  ```js
  const [firstName, setFirstName, undoFirstName] = useChronicle('');
  ``` */
  const [firstName, setFirstName, undoFirstName] = useChronicle("");
  const [lastName, setLastName, undoLastName] = useChronicle("");
  const [phoneNumber, setPhoneNumber, undoPhoneNumber] = useChronicle("");

  return (
    <form>
      <label>
        First Name
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          {/* - Use our `undoFirstName` function as the onClick callback for the first "undo" button. */}
          <button type="button" onClick={undoFirstName}>
            undo
          </button>
        </div>
      </label>
      <label>
        Last Name
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <button type="button" onClick={undoLastName}>
            undo
          </button>
        </div>
      </label>
      <label>
        Phone Number
        <div>
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <button type="button" onClick={undoPhoneNumber}>
            undo
          </button>
        </div>
      </label>
      <button type="button">Submit</button>
    </form>
  );
}
