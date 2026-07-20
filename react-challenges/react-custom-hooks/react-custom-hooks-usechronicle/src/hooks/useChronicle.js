import { useState } from "react";

export function useChronicle(initialValue) {
  /* - Create a state `timeline` and set its initial value to an empty array `[]`. 
- Our state should start with an initial value. Add a parameter to our hook called `initialValue` 
and add it as the first element of our `timeline` array when calling `useState`.*/
  const [timeline, setTimeline] = useState([initialValue]);
  /*  Create a function `setState` which takes a new value as an input and appends it to our timeline array (by using `setTimeline`). */
  function setState(newValue) {
    setTimeline((currentTimeline) => [...currentTimeline, newValue]);
  }

  /* - Create a function `resetState` which removes the last element from our timeline and updates our timeline state. 
Only remove the item if the timeline still contains 2 or more elements (Hint: use `array.slice`). */
  function resetState() {
    if (timeline.length >= 2) {
      setTimeline(timeline.slice(0, -1));
    }
  }

  /* - The last element in our timeline is the current value of the state, store it in a variable called `currentValue`. 
(Hint: you can use `array.at(-1)` to access the last value of an array). */
  const currentValue = timeline.at(-1);

  /* - Our new hook now needs to return the `currentValue`, `setState` function and `resetState` function all in one array: 
`return [currentValue, setState, resetState]`. */
  return [currentValue, setState, resetState];
}
