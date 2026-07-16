import "./styles.css";
import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Secret message incoming...");

  if (!showMessage) {
    return (
      <div className="container">
        <h1>
          Message is hidden{" "}
          <span role="img" aria-label="scream">
            😱
          </span>
        </h1>
        <button
          type="button"
          className="button"
          onClick={() => setShowMessage(true)}
        >
          Show Message
        </button>
      </div>
    );
  }

  /* War zuvor an dieser Stelle, nun nach oben geschoben.
  const [message, setMessage] = useState("Secret message incoming..."); */

  return (
    <div className="container">
      <button
        type="button"
        className="button"
        onClick={() => setShowMessage(false)}
      >
        Hide Message
      </button>
      <button
        type="button"
        className="button"
        onClick={() =>
          setMessage("The secret of Monkey Island is ... wait, no spoilers!")
        }
      >
        Now really show the message!
      </button>
      <h2>{message}</h2>
    </div>
  );
}

/* Error Message:
 27:33  error  React Hook 
 "useState" is called conditionally. 
 React Hooks must be called in the exact same order in every component render. 
 Did you accidentally call a React Hook after an early return? */

/*  Only call Hooks at the top level 
Functions whose names start with use are called Hooks in React.

Don’t call Hooks inside loops, conditions, nested functions, or try/catch/finally blocks. 
Instead, always use Hooks at the top level of your React function, before any early returns. */
