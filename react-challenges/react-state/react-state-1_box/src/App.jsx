import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive ? "Deactivate" : "Activate"}</button> {/* toggle the button text between “Activate” and “Deactivate”? */}
    </main>
  );
}


/* ### Hacker Bonus

Check the console and pay close attention to the logged value of `isActive`. You will notice that `console.log()` does not immediately show the value you just set with the `set` function one line before. For example, if you set `isActive` to `true`, it will log `false` instead, and vice versa. */
/* setIsActive() aktualisiert den State erst beim nächsten Render (asynchron). Deshalb sieht man dort noch den alten Wert. */