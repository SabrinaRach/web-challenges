export default function App() {
  function handleClick(text) {
    console.log("You clicked me");
  }
  return (
  <Button color="blue" disabled={false} onClick={handleClick} text="Click me"/>
  );
}

/* Inhalt zwischen Tags → {text}
HTML-Attribute → disabled={disabled}
CSS → style={{ color }} */

function Button ({color, disabled, text, onClick}) {
   /* Part 3: function handleClick() {
    console.log("You clicked me!");
  } */
  return (
  <button disabled={disabled} style={{backgroundColor: color, height: "50px", width: "200px"}} onClick={onClick}
  /* onClick={() => console.log("You clicked me!")} Part 2 */
  /* onClick={handleClick} Part 3 */> 
    {text}
  </button>);
}
