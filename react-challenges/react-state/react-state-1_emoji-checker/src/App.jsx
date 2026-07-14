import "./styles.css";
/* Import a built-in React function (react hook) that you will need for this challenge. */
import { useState } from "react";

export default function App() {
  /* inputCode -> der aktuelle gespeicherte Wert, setInputCode -> die Funktion, um diesen Wert zu ändern, "" -> Startwert */
  const [inputCode, setInputCode] =
    useState(""); /* setzt am Anfang einen leeren String */
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setInputCode(inputCode + emoji);
    console.log(emoji);
    console.log(inputCode);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          setInputCode(""); /* wieder leeren String setzen */
        }}
      >
        Reset
      </button>
      {/* Man muss die Buttons in der Reihenfolge klicken wie von validCode (Zeile 9) vorgegeben */}
      {inputCode === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
