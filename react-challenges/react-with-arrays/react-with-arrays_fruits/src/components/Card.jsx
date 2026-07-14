import "./Card.css";

/* ## Bonus

Change the `Card` component so that it receives a `color` prop and set the background-color of the Card to this value. Use the color property of each fruit object for this prop. */

export default function Card({ name, color }) {
  return <p className="card" style={{backgroundColor: color}}>{name}</p>;
}
