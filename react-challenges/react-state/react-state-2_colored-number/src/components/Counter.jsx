import ColoredNumber from "./ColoredNumber";
import { useState } from "react"; /* import useState */

export default function Counter() {
  const [count, setCount] =
    useState(0); /* State of the Counter, starting value = 0 */
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />{" "}
      {/* setting the value to the current count */}
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() =>
            setCount(count + 1)
          } /* added click handler that counts + 1 with every click. The color of the numbers are changing via the function in ColoredNumbers.jsx */
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
