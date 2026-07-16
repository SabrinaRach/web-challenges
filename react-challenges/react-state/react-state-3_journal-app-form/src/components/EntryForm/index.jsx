import "./EntryForm.css";
import Button from "../Button";

/* ### Let the form trigger an exposed event */
export default function EntryForm({ onAddEntry }) {
  /* Funktion wird ausgeführt, wenn der Button gedrückt wird */
  function handleSubmit(event) {
    event.preventDefault();
    /* gather the values of all input fields */
    const formData = new FormData(event.target);
    /* create an object with the keys `motto` and `notes` containing the fields' values */
    const newEntry = {
      motto: formData.get("motto"),
      notes: formData.get("notes"),
    };
    /* Call `onAddEntry` and pass the object. */
    onAddEntry(newEntry);
    /* Make sure to reset the form after submitting. */
    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
