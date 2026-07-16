import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(
      (n) => n + 1,
    ); /* wenn in jeder Zeile count+1 steht, dann nutzt jede Zeile den initial State of useState = 0 und zählt +1. Also kommt immer 1 raus. Deshalb braucht man die Updater Function */
    setCount((n) => n + 1);
    setCount((n) => n + 1);
  }
  /* n => n + 1 is an updater function. React adds that function to its queue. 
n is the name of a parameter (can also name it x or currentstate or ...). it is the starting value of the previous state.
so it starts with 0, then we add 1 -> previous state is = 1 -> we add 1 -> previous state is 2 ...
Start: 0

1. Funktion:
0 + 1 = 1

2. Funktion:
1 + 1 = 2

3. Funktion:
2 + 1 = 3 */

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
