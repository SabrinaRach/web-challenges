/* remove useState
- Counter.jsx doen't change the state anymore, it's in App.jsx now
- Counter tells App that someone clicked + or -
- App decides how to change the state = State Lifting */
export default function Counter({ onAddPerson, onRemovePerson }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAddPerson}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onRemovePerson}
        >
          -
        </button>
      </div>
    </>
  );
}
