import { useState } from "react";
import "./styles.css";

export default function App() {
  /*   1. State erstellen */
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    /*   2. Beim Absenden die Werte aus dem Formular holen */
    const holidayInput = event.target.holiday.value;
    const dateInput = event.target.date.value;
    /*   3. Werte im React State speichern */
    setHoliday(holidayInput);
    setDate(dateInput);

    /*Bonus Task: reset form fields*/
    event.target.reset();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
